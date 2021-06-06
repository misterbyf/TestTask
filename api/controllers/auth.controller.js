import bCrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import redisClient from '../utils/init.redis';
import User from '../models/User';
const SECRET_KEY = process.env.JWT;
const saltRounds = 10;

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'User does not exist.' });
    }
    const passwordResult = await bCrypt.compare(password, user.password);
    if (!passwordResult) {
      return res.status(httpStatus.BAD_REQUEST).json({ message: 'Incorrect password.' });
    }
    const token = jwt.sign({
      userId: user._id,
      email: user.email
    }, SECRET_KEY, { expiresIn: 60 * 60 });
    await redisClient.set(token.toString(), user._id.toString(), 'EX', 60 * 60);
    return res
      .cookie('jwt', token, { signed: true, httpOnly: true })
      .status(httpStatus.OK)
      .json(user);
  } catch (error) {
    return next(error);
  }
}

async function register(req, res, next) {
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

async function googleAuthorization(req, res, next) {
  try {
    const { email } = req.user;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'User does not exist.' });
    }
    const token = jwt.sign({
      userId: user.id,
      email: user.email
    }, SECRET_KEY, { expiresIn: 60 * 60 });
    await redisClient.set(token.toString(), user.id.toString(), 'EX', 60 * 60);
    return res
      .cookie('jwt', token, { signed: true, httpOnly: true })
      .status(httpStatus.OK)
      .json(user);
  } catch (error) {
    return next(error);
  }
}

export {
  login,
  register,
  googleAuthorization
};
