const asyncHandler = require('express-async-handler');
const Moderator = require('../Models/moderatorModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const getModerators = asyncHandler(async (req,res)=>{
    
    // here goes on
})

const addModerator = asyncHandler(async (req,res)=>{
    // here goes on
    const {name, email, phone, secretKey} = req.body;
    if(!name || !email || !phone || secretKey){
        res.status(400);
        throw new Error('fill all required fields !')
    }

    // checking existed moderator
    const existed = await Moderator.findOne({email});
    if(existed){
        res.status(400);
        throw new Error('moderator already existed');
    }

    // bcyrpting the secret key
    const salt = await bcrypt.genSalt(10);
    const hashedSecret = await bcrypt.hash(secretKey, salt);

    const mod = await Moderator.create(
        {
            name,
            email,
            secretKey: hashedSecret,
            phone
        }
    );

    res.json({
        id: mod.id,
        name,
        email,
        token: genJwt(mod.id)
    })

})

const singleModerator = asyncHandler(async (req,res)=>{
    // here goes on
})
const deleteModerator = asyncHandler(async (req,res)=>{
    
    // here goes on
})

const otherStuff = asyncHandler(async (req,res)=>{
    
    // here goes on
})

// generate JWT
const genJwt = (id) => {
    return jwt.sign({id}, process.env.JWT_SEC);
}

module.exports = {
    getModerators,
    addModerator,
    deleteModerator,
    otherStuff
}