const express = require('express')
const router = express.Router();
const {getAllUsers, siginMod} = require('../Controllers/moderators');
const authModerator = require('../Middlewares/authModerator');

router.post('/login',siginMod);
router.get('/users',authModerator, getAllUsers);

module.exports = router;