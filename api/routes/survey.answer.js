const express = require('express');
const router = express.Router();
const surveyAnswerController = require('../controllers/survey.answer.controller');

router.post('/survey_answer', surveyAnswerController.createSurveyAnswer);
router.get('/survey_answer/:id', surveyAnswerController.getSurveyAnswer);
router.get('/survey_answer', surveyAnswerController.getSurveyAnswers);

module.exports = router;
