// note: error in jwt .....

const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

// registration
const userRegister =asyncHandler(async (req,res) =>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error('please complete all fields ...')
    }

    // check if not registered already

    const existedUser = await User.findOne({email});
    if(existedUser){
        res.status(400);
        throw new Error('user already existed');
    }
    // save user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
      res.status(200);
      res.json({
          id: user.id,
          name: user.name,
          email: user.email,
          token: genJwt(user._id)
      })
    }
})

// login User
const loginUser =asyncHandler(async (req,res) =>{
    const {email, password } = req.body;

    const user = await User.findOne({email});
    if(user && bcrypt.compare(password, user.password)){
        
        res.status(200);
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: genJwt(user.id)
        })
    } else{
        res.status(400);
        throw new Error('incorrect email or password')
    }
})

// user profile
const userProfile =asyncHandler(async (req,res) =>{
    const user = await User.findById(req.user.id);
    if(!user){
        req.status(400);
        throw new Error('user not found');
    }

    res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
    })
})

// Generate jwt
const genJwt = (id) => {
    return jwt.sign({id},process.env.JWT_SEC);
}

module.exports = {
    userRegister,
    userProfile,
    loginUser
}