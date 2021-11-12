//const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require('express-async-handler')
const user = require('../models/userModel')

exports.login = asyncHandler(async (req, res, next) => {

    res.json({
        success: true,
        message: 'Welcome to Game....'
    })
})