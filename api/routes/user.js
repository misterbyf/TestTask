import express from 'express';
import { createUser, updateUser, getUser } from '../controllers/user.controller';
import middlewarePassportJwt from '../middleware/middleware.passport.jwt';
const router = express.Router();

router.route('/:id')
  .get(middlewarePassportJwt, getUser)
  .put(middlewarePassportJwt, updateUser);
router.post('/', middlewarePassportJwt, createUser);

export default router;
