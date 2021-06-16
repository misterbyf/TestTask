import Joi from 'joi';

export default function middlewareValidator(schema) {
  return async (req, res, next) => {
    // schema = function (Joi) { return: { params: Joi.object({ id: Joi.string().required(), query: Joi.object({  ...}) }) } }
    // TODO map keys, run validate()
    //
    // const newSchema = schema(Joi);
    //
    // for (const key of ['params', 'query', 'body']) {
    //   await newSchema.validateAsync(req[key]);
    // }


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
