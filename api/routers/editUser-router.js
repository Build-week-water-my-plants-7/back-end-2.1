const router = require('express').Router()
const EditUser = require('../models/editUser-model')

router.put('/', async (req, res, next) =>{
    try{
        const { username, password } = req.body
        const newUser = {username, password}
        const user = await EditUser.update(newUser)

        res.status(201).json(user)
    } catch (err){
        next(err)
    }
    next()
})

module.exports = router