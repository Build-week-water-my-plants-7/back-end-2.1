const router = require('express').Router()
const EditUser = require('../models/editUser-model')

router.put('/:id', async (req, res, next) =>{
   const changes = req.body
   EditUser.update(req.params.id, changes)
   .then(user =>{
       res.status(200).json(user)
   })
   .catch(next)
})

module.exports = router