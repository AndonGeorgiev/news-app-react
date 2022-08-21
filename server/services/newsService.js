const News = require('../models/newsModel');

exports.getByQuery = (tag) => News.find({ tag: tag });
exports.getOneById = (id) => News.findById(id);

exports.getTheLastOneNews = async function(){
    let allNews = await News.find({});
    let lastOne = allNews[allNews.length - 1];
    return lastOne
 }
 
 exports.edit = async function(id,data){
    let editedNews = await News.findByIdAndUpdate(id,data);
    return editedNews
 } 
 
 exports.deleteOne = async function(id){
    let deletedNews = await News.findByIdAndDelete(id);
    return deletedNews
 }

exports.create = async(newsInfo) => {
    let newNews = await News.create(newsInfo);
    console.log('test');


    return newNews;
};


exports.like = async(newsId, userId) => {
   let news = await News.findById(newsId);
   news.likers.push(userId);
   return news.save();
}

