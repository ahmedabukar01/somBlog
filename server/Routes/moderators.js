const express = require('express')
const router = express.Router();
const {loginModerator} = require('../Controllers/moderators');

router.get('/',loginModerator);

module.exports = router;