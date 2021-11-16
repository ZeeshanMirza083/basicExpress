const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const ErrorHandler = require('../utils/errorHandler')

exports.login = asyncHandler(async (req, res) => {
    const { email, ...others } = req.body
    const rsp = await User.find({ 'email': email })
    if (rsp.length) {
        let user = await User.findOneAndUpdate({ 'email': email }, others, {
            new: true
        });
        res.send({
            success: true,
            message: user
        })
    } else {
        let otherData = {
            coins: 500,
            diamonds: 10,
            country: '',
            isoAlpha2: '',
            totalGames: 0,
            gameWon: 0,
            twoPlayerWins: 0,
            threePlayerWins: 0,
            fourPlayerWins: 0,
            fivePlayerWins: 0,
            sixPlayerWins: 0,
            ...req.body
        }
        const user = new User(otherData)
        await user.save()
        res.send({
            success: true,
            message: user
        })
    }

})