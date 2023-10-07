// third party libs
const express = require('express');
const path = require('path');

// Controllers
const userController = require('../controllers/user') 

const router = express.Router();

router.get('/', userController.getIndex);

router.post('/login', userController.postIndex);

router.get('/register', userController.getRegister);

router.post('/register', userController.postRegister);

module.exports = router;