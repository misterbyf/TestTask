const createSurvey = (req, res) => {
  res.status(201).json({
    survey: 'surveyCreated'
  });
};

const getSurvey = (req, res) => {
  res.status(200).json({
    survey: 'showSurvey'
  });
};

const updateSurvey = (req, res) => {
  res.status(200).json({
    survey: 'updateSurvey'
  });
};

const removeSurvey = (req, res) => {
  res.status(200).json({
    survey: 'removeSurvey'
  });
};

module.exports = {
  createSurvey,
  getSurvey,
  updateSurvey,
  removeSurvey
};
