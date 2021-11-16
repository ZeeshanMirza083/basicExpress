const yup = require('yup');
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require('express-async-handler')

exports.login = asyncHandler((req, res, next) => {
    let schema = yup.object().shape({
        textImage: yup.string().required(),
        userName: yup.string().required(),
        email: yup.string().required().email(),
    })

    schema
        .validate(req.body, { abortEarly: false })
        .then((result) => {
            next()
        })
        .catch((err) => {
            next(new ErrorHandler(err, 422))
        });


})