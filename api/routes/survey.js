import express from 'express';
import middlewarePassportJwt from '../middleware/middleware.passport.jwt';
import {
  getSurvey,
  updateSurvey,
  removeSurvey,
  createSurvey
} from '../controllers/survey.controller';
const router = express.Router();

router.route('/:id')
  .get(middlewarePassportJwt, getSurvey)
  .delete(middlewarePassportJwt, removeSurvey)
  .put(middlewarePassportJwt, updateSurvey);
router.post('/', middlewarePassportJwt, createSurvey);

export default router;
