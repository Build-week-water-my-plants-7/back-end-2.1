const router = require('express').Router()
const User = require('../models/register-model')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrets/')

function tokenBuilder(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
  }
  const options = {
    expiresIn: '1d'
  }
  const token = jwt.sign(
    payload,
    JWT_SECRET,
    options,
  )
  return token
}


router.post('/', async (req, res, next) => {
    const { username, password } = req.body
    try {
        const [existingUser] = await User.findBy({ username })
        if (existingUser && bcrypt.compareSync(password, existingUser.password)) {
            const token = tokenBuilder(existingUser)
            res.status(200).json({
                message: `welcome, Plant Guy ${existingUser.username}`,
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