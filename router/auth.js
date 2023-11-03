const express = require('express')
const router = express.Router()

require('../db/conn')
const User = require("../model/userSchema")

router.get('/', (req, res) => {
    res.send(`Hello World From the Server router js`)
});

router.post('/adduser', async (req, res) => {

    const { name, email, phoneNumber, passingYear, collegename, companyname, higherstudiescollege } = req.body;

    if (!name || !email || !passingYear || !collegename) {
        return res.status(422).json({ error: "plz fill all the fields" })
    }

    try {
        const userExist = User.findOne({ email: email });
        if (userExist == true) {
            return res.status(422).json({ error: "User already Exist" })
        }
        const user = new User({ name, email, phoneNumber, passingYear, collegename, companyname, higherstudiescollege })

        await user.save()
        console.log(user)
        res.status(201).json({ message: "user added succefully" })

    } catch (err) {
        console.log(err)
    }

});

router.get("/getAllUser", async (req, res) => {
    try {
        const alluser = await User.find({})
        // res.send({ status: "ok", data: alluser })
        res.json(alluser)
    } catch (err) {
        console.log(err)
    }
})
module.exports = router
