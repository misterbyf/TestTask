import express from 'express';
import middlewarePassportJwt from '../middleware/middleware.passport.jwt';
import middlewareValidator from '../middleware/middleware.validator';
import { createUser, updateUser, getUser } from '../controllers/user.controller';
import { createUserSchema, getUserSchema, updateUserSchema } from '../middleware/schemas.for.validation/user.schema';

const router = express.Router();

router.route('/:id')
  .get(middlewarePassportJwt, middlewareValidator(getUserSchema), getUser)
  .put(middlewarePassportJwt, middlewareValidator(updateUserSchema), updateUser);
router.route('/')
  .post(middlewarePassportJwt, middlewareValidator(createUserSchema), createUser);

export default router;
