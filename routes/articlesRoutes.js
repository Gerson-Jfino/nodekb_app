const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

//views routers
router.get('/', articleController.index);
router.get('/create', articleController.create);
router.get('/:id', articleController.show);
router.get('/edit/:id', articleController.edit);

//routes
router.post('/', articleController.store);
router.post('/edit/:id', articleController.update);
router.delete('/:id', articleController.delete);

module.exports = router;