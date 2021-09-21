const router = require('express').Router()
const { addPlantVerification } = require('../middlewares/addPlant-middleware')
const Plant = require('../models/addPlant-model')

router.post('/', addPlantVerification, (req, res, next) =>{
    Plant.createPlant(req.body)
    .then(plant =>{
        res.status(201).json(plant)
    })
    .catch(next)
})


module.exports = router;