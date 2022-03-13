const Post = require('../Models/postModel');
const asyncHandler = require('express-async-handler');
const { json } = require('express/lib/response');

// Get posts
// @Method GET
// @Path /posts
const getPost = asyncHandler(async (req, res)=>{
    const posts = await Post.find();
    res.json({posts})
})

// GEt Single Post
// @method GET
// @Path /posts/id
const singlePost = asyncHandler(async (req,res)=>{
    const post = await Post.findById(req.params.id);
    if(!post){
        res.json(400);
        throw new Error('post not found');
    }

    res.json({post});
})

// @method POST
// @path /posts
const createPost = asyncHandler(async (req, res)=>{
    const {title, body} = req.body;
    if(!title || !body){
        res.status(400);
        throw new Error('fill the blank man!')
    }

    const post = await Post.create({
        title: req.body.title,
        body: req.body.body,
        user: req.user.id
    });

    res.status(200).json({post})
})
//
const updatePost = asyncHandler(async (req, res)=>{
    const post = await Post.findById(req.params.id);

    if(!post){
        res.status(400);
        throw new Error('post not found!')
    }

    // check 
    if(post.user.toString() !== req.user.id){
        res.status(400);
        throw new Error('unathorized user')
    } 

    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json({post: updated});
})
//
const deletePost = asyncHandler(async (req, res)=>{
    const post = await Post.findById(req.params.id);

    if(!post){
        res.status(400);
        throw new Error('post not found!')
    }

    // check 
    if(post.user.toString() !== req.user.id){
        res.status(400);
        throw new Error('unathorized user')
    } 

    await Post.findByIdAndRemove(req.params.id);

    res.json({message: 'delete Post'})
})


// exports
module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost,
    singlePost
}