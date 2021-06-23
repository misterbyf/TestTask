function getSurveySchema(Joi) {
  return Joi.object().keys({
    params: {
      id: Joi.string().trim().required()
    }
  });
}

function removeSurveySchema(Joi) {
  return Joi.object().keys({
    params: {
      id: Joi.string().trim().required()
    }
  });
}

function updateSurveySchema(Joi) {
  return Joi.object().keys({
    params: {
      id: Joi.string().trim().required()
    },
    body: {
      name: Joi.string(),
      url: Joi.string().trim(),
      questions: Joi.array().items(
        Joi.object({
          name: Joi.string()
        })
      )
    }
  });
}

function createSurveySchema(Joi) {
  return Joi.object().keys({
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
