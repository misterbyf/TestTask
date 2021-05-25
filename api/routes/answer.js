import express from 'express';
import passport from 'passport';
import {createAnswer, getAnswer, getAnswers, removeAnswer} from '../controllers/answer.controller';
const router = express.Router();

router.route('/:url')
  .post(passport.authenticate('jwt', { session: false }), createAnswer)
  .get(passport.authenticate('jwt', { session: false }), getAnswers);
router.get('/:url/:id', passport.authenticate('jwt', { session: false }), getAnswer);

export default router;
