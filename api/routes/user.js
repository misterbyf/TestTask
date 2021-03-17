const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.route('/')
  .post(userController.createUser)
  .put(userController.updateUser);
router.get('/:id', userController.getUser);

module.exports = router;
