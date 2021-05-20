import express from 'express';
import passport from 'passport';
import { createAnswer, getAnswer, removeAnswer } from '../controllers/answer.controller';
const router = express.Router();

router.route('/:url')
  .post(passport.authenticate('jwt', { session: false }), createAnswer)
  .get(passport.authenticate('jwt', { session: false }), getAnswer)
  .delete(passport.authenticate('jwt', { session: false }), removeAnswer);

export default router;
