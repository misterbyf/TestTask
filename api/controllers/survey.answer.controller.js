module.exports.createSurveyAnswer = (req, res) => {
  res.status(201).json({
    surveyAnswer: 'surveyAnswerCreated'
  });
};

module.exports.getSurveyAnswer = (req, res) => {
  res.status(200).json({
    surveyAnswer: 'showSurveyAnswer'
  });
};

module.exports.getSurveyAnswers = (req, res) => {
  res.status(200).json({
    surveyAnswer: 'listSurveyAnswer'
  });
};
