const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const status = require('http-status');
// eslint-disable-next-line no-unused-vars
const dotEnv = require('dotenv').config();
const User = require('../models/User');
const key = process.env.JWT;

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const {
      _id: candidateId,
      email: candidateEmail,
      password: candidatePassword
    } = await User.findOne({ email });
    if (!candidatePassword) {
      return res.status(status.NOT_FOUND).json({ message: 'User does not exist.' });
    }
    const passwordResult = bcrypt.compareSync(password, candidatePassword);
    if (!passwordResult) {
      return res.status(status.BAD_REQUEST).json({ message: 'Incorrect password, please try again.' });
    }
    const token = jwt.sign({
      // eslint-disable-next-line no-underscore-dangle
      userId: candidateId,
      email: candidateEmail
    }, key, { expiresIn: 60 * 60 });
    return res.status(status.OK).json({ token: `Bearer ${token}` });
  } catch (error) {
    return next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(status.BAD_REQUEST).json({ message: 'User with same email has been created.' });
    }
    const salt = bcrypt.genSaltSync(10);
    const user = new User({
      name,
      email,
      password: bcrypt.hashSync(password, salt)
    });
    try {
      await user.save();
      return res.status(status.CREATED).json(user);
    } catch (error) {
      return next(error);
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  login,
  register
};
