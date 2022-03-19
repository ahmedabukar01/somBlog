const express = require('express')
const router = express.Router();
const {getAllUsers} = require('../Controllers/moderators');

router.get('/',getAllUsers);

module.exports = router;