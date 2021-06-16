function createUserSchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {},
    body: {
      name: Joi.string().required(),
      email: Joi.string().trim().email().required(),
      password: Joi.string()
        .trim()
        .min(5)
        .max(16)
        .required()
    }
  });
}

function getUserSchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {
      id: Joi.string().trim().required()
    },
    body: {}
  });
}

function updateUserSchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {
      id: Joi.string().trim().required()
    },
    body: {
      name: Joi.string().required(),
      email: Joi.string().trim().email().required(),
      password: Joi.string()
        .trim()
        .min(5)
        .max(16)
        .required()
    }
  });
}

export {
  createUserSchema,
  getUserSchema,
  updateUserSchema
};
