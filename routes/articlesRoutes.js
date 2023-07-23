const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/', articleController.index);
router.post('/', articleController.store);

module.exports = router;