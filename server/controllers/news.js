const express = require('express');
const { getAll } = require('../services/newsService');
const router = express.Router();

const getNews = async function(req, res) {
    const allNews = await getAll();
    res.json(allNews);
    res.end();
}

router.get('/news', getNews)



module.exports = router;