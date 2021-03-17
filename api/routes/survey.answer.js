const express = require('express');
const passport = require('passport');
const router = express.Router();
const surveyAnswerController = require('../controllers/survey.answer.controller');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }))
  .post(surveyAnswerController.createSurveyAnswer);
router.get('/:id', surveyAnswerController.getSurveyAnswer);

module.exports = router;
