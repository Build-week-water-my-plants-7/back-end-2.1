function registerVerification(req, res, next) {
    if(!req.body.username || !req.body.password){
        next({ status: 422, message: 'username or password required!'})
    } else if(req.body.username.length < 3 || req.body.password.length < 3) {
        next({ status: 422, message: 'username or password are to short!'})
    }
    else{
        next()
    }
}



module.exports = {
    registerVerification
}