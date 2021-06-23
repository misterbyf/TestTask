import httpStatus from 'http-status-codes';

import User from '../models/User';

/**
 * POST /api/user
 * */
async function createUser(req, res, next) {
  try {
    const { name, email, password } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({
          message: 'User with same email has been created.'
        });
    }

    const user = new User({
      name,
      email,
      password
    });

    await user.save();

    return res
      .status(httpStatus.CREATED)
      .json(user);
  } catch (error) {
    return next(error);
  }
}

/**
 * GET /api/user/:id
 * */
async function getUser(req, res, next) {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          message: 'User does not exist.'
        });
    }

    return res
      .json(user);
  } catch (error) {
    return next(error);
  }
}

/**
 * PUT /api/user/:id
 * */
async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    
    const { name, email, password } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          message: 'User does not exist.'
        });
    }

    const validEmail = await User.findOne({ email });

    if (validEmail) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({
          message: 'User with same email already exist.'
        });
    }

    Object.assign(user, { name, email, password });

    await User.updateOne({ _id: id }, {
      $set: user
    });

    const reloadUser = await User.findOne({ email });

    return res
      .json(reloadUser);
  } catch (error) {
    return next(error);
  }
}

export {
  createUser,
  getUser,
  updateUser
};
