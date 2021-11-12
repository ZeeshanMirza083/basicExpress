const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT

const usersRoute = require('./routes/users');

app.use('/users', usersRoute);

app.all('*', (req, res) => {
    res.json({
        success: false,
        message: 'page not found...'
    })
})

app.listen(port, () => {
    console.log(`started at http://localhost:${port}`)
})