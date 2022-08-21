const express = require('express');
const { getByQuery, create, getTheLastOneNews, getOneById, edit, deleteOne, like } = require('../services/newsService');
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

const editNews = async function(req, res) {
    const id = req.params.id;
    const data = req.body;
    const editNews = await edit(id,data)
    res.json(editNews);
    res.end();

}


const deleteNews = async function(req, res) {
    const id = req.params.id;
    const deleteNews = await deleteOne(id)
    res.json(deleteNews);
    res.end();

}

const likeNews = async(req, res) => {
    const userId = req.body.userId;
    console.log(userId);
    const newsId = req.params.id;
    res.json(await like(newsId, userId));
    res.end();
}

router.get('/news', getNews)
router.get('/news/:id', getNewsById)
router.post('/news/edit/:id', editNews)
router.delete('/news/delete/:id', deleteNews)
router.post('/news/create', createNews)
router.post('/news/like/:id', likeNews);



module.exports = router;