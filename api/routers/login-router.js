const router = require('express').Router()
const User = require('../models/register-model')
const bcrypt = require('bcryptjs')

router.post('/login', async (req, res, next) => {
    const { username, password } = req.body
    try {
        const existingUser = await User.findBy({ username })
        if (user && bcrypt.compareSync(password, existingUser.password)) {
            const token = tokenBuilder(existingUser)
            res.status(200).json({
                message: `welcome, Plant Master ${existingUser.username}`,
                token
            })
        } else {
            next({
                status: 401,
                message: 'Invalid credentials, did you try 1234 or qwerty? Or maybe you spelled your name wrong.'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router