const router = require('express').Router()
const restricted = require('../middlewares/restricted-middleware')
const Plants = require('../models/plants-model')

router.get('/', restricted, async (req, res, next) => {
    try {
        const plants = await Plants.find()
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

router.get('/user/:id', async (req, res, next) => {
    try {
        const plants = await Plants.findByUserId(req.params.id)
        if (!plants) {
            next({
                status: 404,
                message: 'No plants found under that user_id'
            })
        } else {
            res.status(200).json(plants)
        }
    } catch (err) {
        next(err)
    } 
})

router.put('/:id', async (req, res, next) => {
    const plantId = req.params.id
    const newPlantValues = req.body
    try {
        const updatedPlant = await Plants.update(plantId, newPlantValues)
        res.status(200).json(updatedPlant)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    const plantId = req.params.id
    try {
        await Plants.remove(plantId)
        res.status(200).json({
            message: 'plant deleted'
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router