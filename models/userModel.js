var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: String,
    userName: String,
    email: String,
    textImage: String,
    coins: Number,
    diamonds: Number,
    country: String,
    isoAlpha2: String,
    totalGames: Number,
    gameWon: Number,
    twoPlayerWins: Number,
    threePlayerWins: Number,
    fourPlayerWins: Number,
    fivePlayerWins: Number,
    sixPlayerWins: Number,
}, { timestamps: true });

const user = mongoose.model('User', UserSchema);

module.exports = user

