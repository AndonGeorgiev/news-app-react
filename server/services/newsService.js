const News = require('../models/newsModel');

exports.getAll = () => News.find({});

exports.create = async(newsInfo) => {
    let newNews = await News.create(newsInfo);

    return newNews;
};