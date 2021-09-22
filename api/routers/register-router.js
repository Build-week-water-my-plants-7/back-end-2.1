const router = require('express').Router()
const { registerVerification } = require('../middlewares/register-middleware')
const User = require('../models/register-model')
const bcrypt = require('bcryptjs')


router.post('/', registerVerification, async (req, res, next) =>{

    try{
        const { username, password, phoneNumber } = req.body
        const hash = bcrypt.hashSync(password, 8)
        const newUser = {username, password: hash, phoneNumber}
        const user = await User.add(newUser)

        res.status(201).json(user)
    } catch (err){
        next(err)
    }
    next()
})



module.exports = router