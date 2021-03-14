const express = require('express');
const passport = require('passport');
const router = express.Router();
const surveyAnswerController = require('../controllers/survey.answer.controller');

router.post('/', surveyAnswerController.createSurveyAnswer);
router.get('/:id', surveyAnswerController.getSurveyAnswer);
router.get('/', passport.authenticate('jwt', { session: false }), surveyAnswerController.getSurveyAnswers);

module.exports = router;
