import Joi from 'joi';

export default function middlewareValidator(schema) {
  return async (req, res, next) => {
    const newSchema = schema(Joi);
    try {
      await newSchema.validateAsync(req, { stripUnknown: true });
      return next();
    } catch (error) {
      return next(error);
    }
  };
}
