import Joi from 'joi';

export default function middlewareValidator(schema) {
  return async (req, res, next) => {
    const { body, query, params } = req;
    const newSchema = schema(Joi);
    try {
      await newSchema.validateAsync({
        body,
        query,
        params
      });
      return next();
    } catch (error) {
      return next(error);
    }
  };
}
