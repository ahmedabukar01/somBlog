// error when finding singleModerator, passing the number then nothing works the way we wanted.

const asyncHandler = require('express-async-handler');
const Moderator = require('../Models/moderatorModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const getModerators = asyncHandler(async (req,res)=>{
    const mod = await Moderator.find();
    res.json(mod);
    // here goes on
})

// add modertor
const addModerator = asyncHandler(async (req,res)=>{
    // here goes on
    const {name, email, password, phone} = req.body;
    if(!name || !email || !password || !phone){
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
    const hashedPass = await bcrypt.hash(password, salt);

    const mod = await Moderator.create(
        {
            name,
            email,
            password: hashedPass,
            phone,
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
    const phone = req.body;
    if(!phone) {
        res.status(400);
        throw new Error('enter phone number')
    }

    const isMod = await Moderator.findOne(phone);

    console.log(phone, isMod)
    if(!isMod){
        res.status(400);
        throw new Error('phone number not founded')
    }

    res.json(isMod);
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
    singleModerator,
    otherStuff
}