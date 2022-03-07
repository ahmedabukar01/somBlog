//
const getPost = (req, res)=>{
    res.json({message: 'get all posts'})
}
//
const createPost = (req, res)=>{
    res.json({message: 'Create posts'})
}
//
const updatePost = (req, res)=>{
    res.json({message: 'update posts'})
}
//
const deletePost = (req, res)=>{
    res.json({message: 'delete Post'})
}


// exports
module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost
}