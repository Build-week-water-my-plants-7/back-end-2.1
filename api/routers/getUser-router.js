const router = require('express').Router()

router.get('/', (req, res, next) =>{
    res.json('get user by id')
    next()
})



module.exports = router