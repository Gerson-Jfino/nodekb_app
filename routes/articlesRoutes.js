const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/', articleController.index);
router.get('/:id', articleController.show);
router.post('/', articleController.store);

module.exports = router;