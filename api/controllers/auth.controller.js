const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const key = process.env.JWT;

module.exports.login = async (req, res) => {
  try {
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
      const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
      if (passwordResult) {
        const token = jwt.sign({
          // eslint-disable-next-line no-underscore-dangle
          userId: candidate._id,
          email: candidate.email
        }, key, { expiresIn: 60 * 60 });
        res.status(200).json({ token: `Bearer ${token}` });
      } else {
        res.status(401).json({ message: 'Incorrect password, please try again.' });
      }
    } else {
      res.status(404).json({ message: 'User does not exist.' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.register = async (req, res) => {
  try {
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
      res.status(409).json({ message: 'User with same email has been created.' });
    }
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    });
    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
