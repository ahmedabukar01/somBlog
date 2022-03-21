const express = require('express')
const router = express.Router();
const {getAllUsers, siginMod} = require('../Controllers/moderators');

router.post('/login',siginMod);

module.exports = router;