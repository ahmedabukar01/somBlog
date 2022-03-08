const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');

const auth =asyncHandler(async (req, res, next) =>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      
        try{
            token = req.headers.authorization.split(' ')[1];

            // verify token
            const decoded = jwt.verify(token,process.env.JWT_SEC);
    
            req.user = await User.findById(decoded.id).select('-password');
    
            next();
        } catch(err){
            console.log(err);
            res.status(400);
            throw new Error('unathorized user');
        }
    } else{
        res.status(400);
        throw new Error('unathorized, and no tokens')
    }
})

module.exports = auth;