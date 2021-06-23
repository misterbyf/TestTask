function getAnswerSchema(Joi) {
  return Joi.object().keys({
    params: {
      id: Joi.string().trim().required(),
      url: Joi.string().trim().required()
    }
  });
}

function getAnswersSchema(Joi) {
  return Joi.object().keys({
    params: {
      url: Joi.string().trim().required()
    }
  });
}

function createAnswerSchema(Joi) {
  return Joi.object().keys({
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
