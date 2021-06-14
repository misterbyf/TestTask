import express from 'express';
import passport from 'passport';
import { googleAuthorization, login, register } from '../controllers/auth.controller';
import { loginSchema, registerSchema } from '../middleware/schemas.for.validation/auth.schema';
import middlewareValidator from '../middleware/middleware.validator';
const router = express.Router();

router.post('/login', middlewareValidator(loginSchema), login);
router.post('/register', middlewareValidator(registerSchema), register);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/api/auth/login' }),
  googleAuthorization
);

export default router;
