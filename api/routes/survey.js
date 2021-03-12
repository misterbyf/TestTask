const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/survey.controller');

router.post('/survey', surveyController.createSurvey);
router.get('/survey/:id', surveyController.getSurvey);
router.put('/survey', surveyController.updateSurvey);
router.delete('/survey/:id', surveyController.removeSurvey);

module.exports = router;
