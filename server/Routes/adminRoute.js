const express = require('express');
const { getModerators, addModerator, singleModerator } = require('../Controllers/creator');
const router = express.Router();

router.get('/moderators',getModerators);
router.post('/moderators',addModerator);
router.post('/moderators/one',singleModerator);

module.exports = router