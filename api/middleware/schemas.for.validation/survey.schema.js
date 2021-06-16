function getSurveySchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {
      id: Joi.string().trim().required()
    },
    body: {}
  });
}

function removeSurveySchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {
      id: Joi.string().trim().required()
    },
    body: {}
  });
}

function updateSurveySchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {
      id: Joi.string().trim().required()
    },
    body: {
      name: Joi.string().required(),
      url: Joi.string().trim().required(),
      questions: Joi.array().items(
        Joi.object({
          name: Joi.string()
        })
      ).required()
    }
  });
}

function createSurveySchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {},
    body: {
      name: Joi.string().required(),
      url: Joi.string().trim().required(),
      questions: Joi.array().items(
        Joi.object({
          name: Joi.string()
        })
      ).required()
    }
  });
}

export {
  getSurveySchema,
  updateSurveySchema,
  removeSurveySchema,
  createSurveySchema
};
