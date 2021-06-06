import express from 'express';
import { createUser, updateUser, getUser } from '../controllers/user.controller';
import passport from "passport";
const router = express.Router();

router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), getUser)
  .put(passport.authenticate('jwt', { session: false }), updateUser);
router.post('/', passport.authenticate('jwt', { session: false }), createUser);

export default router;
