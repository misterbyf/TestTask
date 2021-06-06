import User from '../models/User';
import httpStatus from 'http-status';
import bCrypt from 'bcrypt';
const saltRounds = 10;

async function createUser(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(httpStatus.BAD_REQUEST).json({ message: 'User with same email has been created.' });
    }
    const salt = bCrypt.genSaltSync(saltRounds);
    const user = new User({
      name,
      email,
      password: bCrypt.hashSync(password, salt)
    });
    await user.save();
    return res.status(httpStatus.CREATED).json(user);
  } catch (error) {
    return next(error);
  }
}

async function getUser(req, res, next) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'User does not exist.'
      });
    }
    return res.status(httpStatus.OK).json(user);
  } catch (error) {
    return next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const candidate = await User.findById(id);
    if (!candidate) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: 'User does not exist.'
      });
    }
    const salt = bCrypt.genSaltSync(saltRounds);
    const user = await User.updateOne({ _id: id }, {
      $set: {
        name,
        email,
        password: bCrypt.hashSync(password, salt)
      }
    });
    return res.status(httpStatus.OK).json(user);
  } catch (error) {
    return next(error);
  }
}

export {
  createUser,
  getUser,
  updateUser
};
