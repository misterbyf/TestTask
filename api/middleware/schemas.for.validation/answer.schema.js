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
    body: Joi.array().items(Joi.object({ questionId: Joi.string(), answer: Joi.string() })).required()
  });
}

export {
  createAnswerSchema,
  getAnswerSchema,
  getAnswersSchema
};
