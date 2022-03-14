const express = require('express')
const router = express.Router();
const {getModerators} = require('../Controllers/moderators');

router.get('/',getModerators);

module.exports = router;