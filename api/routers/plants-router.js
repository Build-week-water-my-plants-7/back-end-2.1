const router = require('express').Router()
const restricted = require('../middlewares/restricted-middleware')
const Plants = require('../models/plants-model')

router.get('/', restricted, async (req, res, next) => {
    try {
        const plants = await Plants.find()
        console.log(plants)
        if (!plants) {
            next({
                status: 404,
                message: 'plants not found'
            })
        } else {
            res.status(200).json(plants)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router