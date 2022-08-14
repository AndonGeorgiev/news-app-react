const express = require('express');
const { getByQuery, create, getTheLastOneNews, getOneById } = require('../services/newsService');
const router = express.Router();

const getNews = async function(req, res) {
    let query = req.query.query;
    let result;

    if(query === 'lastOne'){
        result = await getTheLastOneNews();
    }else{
        result = await getByQuery(query);
    }
    
    res.json(result);
    res.end();
}



const createNews = async function(req, res) {
    const newsInformation = req.body;
    const createNews= await create(newsInformation);
    res.json(createNews);
    res.end();

}

const getNewsById = async function(req, res) {
    const id = req.params.id;
    const news= await getOneById(id);
    res.json(news);
    res.end();

}

router.get('/news', getNews)
router.get('/news/:id', getNewsById)
router.post('/news/create', createNews)



module.exports = router;