import express from 'express';
import { createUser, updateUser, getUser } from '../controllers/user.controller';
const router = express.Router();

router.route('/:id')
  .get(getUser)
  .put(updateUser);
router.post('/', createUser);

export default router;
