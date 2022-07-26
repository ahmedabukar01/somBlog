const express = require('express');
const router = express.Router();
const { userRegister, loginUser, singleUser, userProfile } = require('../Controllers/userController');
const auth = require('../Middlewares/auth');

router.post('/register',userRegister);
router.post('/login',loginUser);
router.get('/me',auth, userProfile);
router.post('/user', singleUser);

module.exports = router;