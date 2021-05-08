async function createSurveyAnswer(req, res, next) {
  console.log(req.user);
  console.log(req.body.survey);

  return res.status(201).json({
    surveyAnswer: 'surveyAnswerCreated'
  });
}

function getSurveyAnswer(req, res) {
  res.status(200).json({
    surveyAnswer: 'showSurveyAnswer'
  });
}

function getSurveyAnswers(req, res) {
  res.status(200).json({
    surveyAnswer: 'listSurveyAnswer'
  });
}

export {
  createSurveyAnswer,
  getSurveyAnswer,
  getSurveyAnswers
};
