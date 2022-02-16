const express = require('express');
const router = express.Router();
const { getRecords } = require('./recordController');
router.get("/records",getRecords);

module.exports = router;