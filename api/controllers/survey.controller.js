module.exports.createSurvey = (req, res) => {
  res.status(201).json({
    survey: 'surveyCreated'
  });
};

module.exports.getSurvey = (req, res) => {
  res.status(200).json({
    survey: 'showSurvey'
  });
};

module.exports.updateSurvey = (req, res) => {
  res.status(200).json({
    survey: 'updateSurvey'
  });
};

module.exports.removeSurvey = (req, res) => {
  res.status(200).json({
    survey: 'removeSurvey'
  });
};
