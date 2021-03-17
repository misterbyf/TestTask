const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/survey.controller');

router.route('/:id')
  .get(surveyController.getSurvey)
  .put(surveyController.updateSurvey)
  .delete(surveyController.removeSurvey);
router.post('/', surveyController.createSurvey);

module.exports = router;
