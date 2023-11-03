const dotenv = require("dotenv")
const mongoose = require('mongoose')
const express = require('express');
const app = express();
dotenv.config({ path: './config.env' })

require('./db/conn')
// const User = require('./model/userSchema')

app.use(express.json());
app.use(require('./router/auth'))

const PORT = process.env.PORT

const middleware = (req, res, next) => {
    console.log('hello my middleware')
    next()
}

// app.get('/', (req, res) => {
//     res.send(`Hello World From the Server`)
// });


app.listen(PORT, () => {
    console.log(`server is runnning at port no ${PORT}`)
})