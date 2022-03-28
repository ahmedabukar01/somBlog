const express = require('express')
const router = express.Router();
const {getAllUsers, siginMod, deletePost} = require('../Controllers/moderators');
const authModerator = require('../Middlewares/authModerator');

router.post('/login',siginMod);
router.get('/users',authModerator, getAllUsers);
router.delete('/users/post/:id',authModerator, deletePost);

module.exports = router;