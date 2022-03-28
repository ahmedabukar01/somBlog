const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Moderator = require('../Models/moderatorModel');

const authModerator = asyncHandler(async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token,process.env.somblog);
            req.mod = await Moderator.findById(decoded.id).select('-password')
            console.log(req.mod);
            next();

        } catch (error) {
            res.status(400);
            console.log(error);
            res.json({message: 'unathorized user'})
        }
    }else{
        res.status(400);
        res.json({message: 'unathorized and no tokens'})
    }
})

module.exports = authModerator;