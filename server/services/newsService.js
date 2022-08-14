const News = require('../models/newsModel');

exports.getByQuery = (tag) => News.find({ tag: tag });
exports.getOneById = (id) => News.findById(id);

exports.getTheLastOneNews = async function(){
   let allNews = await News.find({});
   let lastOne = allNews[allNews.length - 1];
   return lastOne
}

exports.create = async(newsInfo) => {
    let newNews = await News.create(newsInfo);
    console.log('test');


    return newNews;
};

