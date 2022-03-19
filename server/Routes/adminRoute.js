const express = require('express');
const { getModerators, addModerator } = require('../Controllers/creator');
const router = express.Router();

router.get('/moderators',getModerators);
router.post('/moderators',addModerator);

module.exports = router