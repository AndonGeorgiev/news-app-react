const mongoose = require('mongoose');


function configDatabase() {
    const uri = 'mongodb://localhost:27017/news';
    return mongoose.connect(uri);
}

module.exports = configDatabase;