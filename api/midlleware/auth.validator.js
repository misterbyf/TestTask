const Joi = require('joi');

const authValidator = async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().trim().email().required(),
      password: Joi.string().min(5).max(16).required()
    });
    await schema.validateAsync(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  authValidator
};
