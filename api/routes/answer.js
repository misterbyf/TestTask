import express from 'express';
import middlewarePassportJwt from '../middleware/middleware.passport.jwt';
import { createAnswer, getAnswer, getAnswers } from '../controllers/answer.controller';
const router = express.Router();

router.route('/:url')
  .post(middlewarePassportJwt, createAnswer)
  .get(middlewarePassportJwt, getAnswers);
router.get('/:url/:id', middlewarePassportJwt, getAnswer);

export default router;
