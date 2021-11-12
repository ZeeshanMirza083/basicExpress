const express = require('express')
var mongoose = require('mongoose');
var cors = require('cors')
require('dotenv').config();

const usersRoute = require('./routes/users');
const errorsMiddlewear = require('./middlewears/errors');
const ErrorHandler = require('./utils/errorHandler');

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use('/users', usersRoute);

app.all('*', (req, res, next) => {
    next(new ErrorHandler('page not found!!!', 404))
})

app.use(errorsMiddlewear)

mongoose.connect(process.env.DB_PATH,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`DB connected & started at http://localhost:${port}`)
        })
    })
    .catch(error => console.error('error in db conneciotn'));



// process.on('unhandledRejection', (err) => {
//     console.log(err.message);
//     process.exit(1);
// })