const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { authValidator } = require('../midlleware/auth.validator');

router.post('/login', authValidator, authController.login);
router.post('/register', authController.register);

module.exports = router;
