const express = require('express');
const router = express.Router();
const {register,login, currentUser} = require('../controllers/userController');
const jwt = require("jsonwebtoken");
const User = require('../models/user');
const { validateToken } = require('../validateToken');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/currentUser').get(validateToken,currentUser);

module.exports = router;