const express = require('express');
const { getAll, create } = require('../services/newsService');
const router = express.Router();

const getNews = async function(req, res) {
    const allNews = await getAll();
    res.json(allNews);
    res.end();
}

const createNews = async function(req, res) {
    const newsInformation = req.body;
    const createNews= await create(newsInformation);
    res.json(createNews);
    res.end();

}

router.get('/news', getNews)
router.post('/news/create', createNews)



module.exports = router;