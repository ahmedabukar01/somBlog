const asyncHandler = require('express-async-handler');
const Post = require('../Models/postModel');
const Trash = require('../Models/trashModel');
const Moderator = require('../Models/moderatorModel');
const bcrypt = require('bcryptjs');
const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');

// Sigin MODERATORS
const siginMod = asyncHandler(async (req,res)=>{
    // here we go.
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error('please enter email and password')
    }

    const mod = await Moderator.findOne({email});
    if(mod && (await bcrypt.compare(password, mod.password))){
        res.json({
            id: mod.id,
            name: mod.name,
            email,
            token: jwtGen(mod.id)
        })
    } else{
        res.status(400);
        throw new Error('email or password is incorrect!')
    }

});

const getAllUsers = asyncHandler(async (req,res)=>{
    // here we go.
    const users = await User.find();
    res.json({users: users});
});
// delete user
const deleteUser = asyncHandler(async (req,res)=>{
    // here we go.

});

// Delete user's Post
const deletePost = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    const post = await Post.findById(id);
    if(!post){
        res.status(400);
        throw new Error('post not found!');
    }

    let deletedPost = await Post.findByIdAndDelete(id);

     const trash = await Trash.create({
         title: deletedPost.title,
         body: deletedPost.body,
         deletedBy: req.mod,
         user: deletedPost.user
     });
     res.json({trash,});

    // here we go.
});


// generate tokens
const jwtGen = (id)=>{
    return jwt.sign({id}, process.env.JWT_SEC);
}
module.exports = {
    getAllUsers,
    siginMod,
    deletePost,
}