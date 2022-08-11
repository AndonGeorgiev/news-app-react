const News = require('../models/newsModel');

exports.getAll = (tag) => News.find({ tag: tag });

exports.create = async(newsInfo) => {
    let newNews = await News.create(newsInfo);
    console.log('test');


    return newNews;
};