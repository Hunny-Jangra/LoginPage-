const express = require('express');
const router = express.Router();
const LoginController = require('../Controller/LoginController');

router
    .route('/create/Userdata')
    .post(LoginController.createUser);

module.exports = router;