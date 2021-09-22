function registerVerification(req, res, next) {
    if(!req.body.username || !req.body.password){
        next({ status: 422, message: 'username or password required!'})
    } else if(req.body.username.length < 3 || req.body.password.length < 3) {
        next({ status: 422, message: 'username or password are to short!'})
    }
    else if (!req.body.phoneNumber || typeof req.body.phoneNumber !== 'string') {
        next({ status: 422, message: 'phoneNumber is required, and its gotta be a string'})
    } else {
        next()
    }
}



module.exports = {
    registerVerification
}