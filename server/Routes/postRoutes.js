const express = require('express')
const router = express.Router();
const {getPost, createPost, updatePost, deletePost} = require('../Controllers/postController');

router.get('/',getPost);
router.post('/',createPost);
router.put('/:id',updatePost);
router.delete('/:id',deletePost);

module.exports = router;