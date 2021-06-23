import express from 'express';
import middlewarePassportJwt from '../middleware/middleware.passport.jwt';
import middlewareValidator from '../middleware/middleware.validator';
import {
  getSurvey,
  updateSurvey,
  removeSurvey,
  createSurvey
} from '../controllers/survey.controller';
import {
  createSurveySchema,
  getSurveySchema,
  removeSurveySchema, updateSurveySchema
} from '../middleware/schemas.for.validation/survey.schema';

const router = express.Router();

router.route('/:id')
  .get(middlewarePassportJwt, middlewareValidator(getSurveySchema), getSurvey)
  .delete(middlewarePassportJwt, middlewareValidator(removeSurveySchema), removeSurvey)
  .put(middlewarePassportJwt, middlewareValidator(updateSurveySchema), updateSurvey);
router.route('/')
  .post(middlewarePassportJwt, middlewareValidator(createSurveySchema), createSurvey);

export default router;
