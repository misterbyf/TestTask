import express from 'express';
import middlewarePassportJwt from '../middleware/middleware.passport.jwt';
import middlewareValidator from '../middleware/middleware.validator';
import { createAnswer, getAnswer, getAnswers } from '../controllers/answer.controller';
import {
  createAnswerSchema,
  getAnswerSchema,
  getAnswersSchema
} from '../middleware/schemas.for.validation/answer.schema';

const router = express.Router();

router.route('/:url')
  .post(middlewarePassportJwt, middlewareValidator(createAnswerSchema), createAnswer)
  .get(middlewarePassportJwt, middlewareValidator(getAnswersSchema), getAnswers);

router.route('/:url/:id')
  .get(middlewarePassportJwt, middlewareValidator(getAnswerSchema), getAnswer);

export default router;
