import express from 'express';
import passport from 'passport';
import {
  getSurvey,
  updateSurvey,
  removeSurvey,
  createSurvey
} from '../controllers/survey.controller';
const router = express.Router();

router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), getSurvey)
  .delete(passport.authenticate('jwt', { session: false }), removeSurvey);
router.put('/', passport.authenticate('jwt', { session: false }), updateSurvey);
router.post('/', passport.authenticate('jwt', { session: false }), createSurvey);

export default router;
