const asyncHandler = require('express-async-handler');
const Post = require('../Models/postModel');
const Trash = require('../Models/trashModel');
const Moderator = require('../Models/moderatorModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Sigin MODERATORS
const siginMod = asyncHandler(async (req,res)=>{
    // here we go.
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error('please enter email and both')
    }

    const mod = await Moderator.findOne({email});
    if(mod && bcrypt.compare(mod.password)){
        res.json({
            id: mod.id,
            name: mod.name,
            email,
            token: jwtGen(mod.id)
        })
    }

});
// Sigin MODERATORS
const getAllUsers = asyncHandler(async (req,res)=>{
    // here we go.
});
// delete user's post
const deleteUser = asyncHandler(async (req,res)=>{
    // here we go.

});

// GET user's comment
const deletePost = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    const post = await Post.findById(id);
    if(!post){
        res.status(400);
        throw new Error('post not found!');
    }

    await Post.findByIdAndDelete(id);

    // const deletedPost = await Trash.create

    // here we go.
});


// generate tokens
const jwtGen = (id)=>{
    return jwt.sign({id}, process.env.JWT_SEC);
}
module.exports = {
    getAllUsers,
    siginMod,
}