const router = require('express').Router()
const Plant = require('../models/addPlant-model')

router.post('/', (req, res, next) =>{
    Plant.createPlant(req.body)
    .then(plant =>{
        res.status(201).json(plant)
    })
    .catch(next)
})


module.exports = router;