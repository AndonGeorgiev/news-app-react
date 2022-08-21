const express = require('express');
const router = express.Router();
const newsController = require('./controllers/news')
const userController = require('./controllers/user')

router.use(newsController);
router.use(userController);


module.exports = router;