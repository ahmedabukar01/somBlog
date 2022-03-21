const express = require('express')
const router = express.Router();
const {getAllUsers, siginMod} = require('../Controllers/moderators');

router.get('/login',siginMod);

module.exports = router;