const express = require('express')
const router = express.Router();
const {getPost, createPost, updatePost, deletePost} = require('../Controllers/postController');
const auth = require('../Middlewares/auth');

router.get('/', getPost);
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;