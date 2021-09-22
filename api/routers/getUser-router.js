const router = require('express').Router()
const User = require('../models/getUser-model')

router.get('/:id', (req, res, next) =>{
    User.findById(req.params.id)
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(next)
})



module.exports = router