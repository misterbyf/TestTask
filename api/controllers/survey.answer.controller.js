const createSurveyAnswer = (req, res) => {
  res.status(201).json({
    surveyAnswer: 'surveyAnswerCreated'
  });
};

const getSurveyAnswer = (req, res) => {
  res.status(200).json({
    surveyAnswer: 'showSurveyAnswer'
  });
};

const getSurveyAnswers = (req, res) => {
  res.status(200).json({
    surveyAnswer: 'listSurveyAnswer'
  });
};

module.exports = {
  createSurveyAnswer,
  getSurveyAnswer,
  getSurveyAnswers
};
