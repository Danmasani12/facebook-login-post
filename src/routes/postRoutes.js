const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authenticateMiddleware = require('../middleware/authenticateMiddleware');

router.post('/post', authenticateMiddleware, postController.createPost);

module.exports = router;
