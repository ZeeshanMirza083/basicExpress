const express = require('express');
const router = express.Router();

const validator = require('../utils/validator')
const userControler = require('../controlers/userControler');
const { validate } = require('../models/userModel');

router.post('/', validator.login, userControler.login)

module.exports = router;