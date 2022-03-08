const express = require('express');
const router = express.Router();
const { userRegister, loginUser, userProfile } = require('../Controllers/userController');
const auth = require('../Middlewares/auth');

router.post('/register',userRegister);
router.post('/login',loginUser);
router.get('/me',auth, userProfile);

module.exports = router;