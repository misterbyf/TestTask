import Joi from 'joi';

export default function newMiddlewareValidator(schema) {
  return async (req, res, next) => {
    const newSchema = schema(Joi);
    try {
      await newSchema.validateAsync(req);
      return next();
    } catch (error) {
      return next(error);
    }
    // const { error } = Joi.validate(req[property], newSchema);
    // const { details } = error;
    // const message = details.map(i => i.message).join(',');
    // console.log('error', message);
    // return res.status(422).json({ error: message });
  };
}
