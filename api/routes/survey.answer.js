import express from 'express';
import passport from 'passport';
import { createSurveyAnswer, getSurveyAnswer } from '../controllers/survey.answer.controller';
const router = express.Router();

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), getSurveyAnswer)
  .post(passport.authenticate('jwt', { session: false }), createSurveyAnswer);
router.get('/:id', passport.authenticate('jwt', { session: false }), getSurveyAnswer);

export default router;
