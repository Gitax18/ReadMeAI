const express = require('express');
const path = require('path');

const appController = require('../controllers/app');

const router = express.Router();

router.get('/', appController.getApp);

router.post('/output', appController.postApp)

module.exports = router;