const Post = require('../Models/postModel');
const asyncHandler = require('express-async-handler');

//get posts
const getPost = asyncHandler(async (req, res)=>{
    const posts = await Post.find();
    res.json({posts})
})

//
const createPost = asyncHandler(async (req, res)=>{
    const {title, body} = req.body;
    if(!title || !body){
        res.status(400);
        throw new Error('fill the blank man!')
    }

    const post = await Post.create({title,body});

    res.status(200).json({post})
})
//
const updatePost = asyncHandler(async (req, res)=>{
    res.json({message: 'update posts'})
})
//
const deletePost = asyncHandler(async (req, res)=>{
    res.json({message: 'delete Post'})
})


// exports
module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost
}