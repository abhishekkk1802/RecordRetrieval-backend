const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    passingYear: {
        type: Number,
        required: true
    },
    collegename: {
        type: String,
        required: true
    },

    companyname: {
        type: String
    },

    higherstudiescollege: {
        type: String,
    }

})

const User = mongoose.model('USER', userSchema)

module.exports = User