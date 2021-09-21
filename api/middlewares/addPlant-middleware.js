function addPlantVerification(req, res, next) {
    if(!req.body.nickname || !req.body.species) {
        next({ status: 422, message: 'Nickname and Species are required!'})
    } else if (!req.body.h2oFrequency){
        next({ status: 422, message: 'Please enter an h2oFrequency'})
    } else {
        next()
    }
}

module.exports ={
    addPlantVerification
}