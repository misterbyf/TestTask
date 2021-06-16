function getAnswerSchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {
      id: Joi.string().trim().required(),
      url: Joi.string().trim().required()
    },
    body: {}
  });
}

function getAnswersSchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {
      url: Joi.string().trim().required()
    },
    body: {}
  });
}

function createAnswerSchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {
      url: Joi.string().trim().required()
    },
    body: {
      data: Joi.object().required()
    }
  });
}

export {
  createAnswerSchema,
  getAnswerSchema,
  getAnswersSchema
};
