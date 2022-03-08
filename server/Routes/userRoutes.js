const express = require('express');
const router = express.Router();
const { userRegister, loginUser, userProfile } = require('../Controllers/userController');

router.post('/register',userRegister);
router.post('/login',loginUser);
router.get('/me',userProfile);

module.exports = router;