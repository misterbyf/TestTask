function loginSchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {},
    body: {
      email: Joi.string().trim().email().required(),
      password: Joi.string().min(5).max(16).required()
    }
  });
}

function registerSchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {},
    body: {
      name: Joi.string().required(),
      email: Joi.string().trim().email().required(),
      password: Joi.string().min(5).max(16).required()
    }
  });
}

export {
  loginSchema,
  registerSchema
};
