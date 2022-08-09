const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title:{
        type: 'string',
        required: [true,'The title is required!'],
        min: [6, 'The minimum length of the title is six!'],
    },

    // date:{
    //     default: new Date(),
    // },

    text:{
        type: 'string',
        required: [true,'The description is required!'],
        min: [200, 'The minimum length of the description is 200!'],
        max: [600, 'the maximum length of the description is 600!'],
    },

    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    picture:{
        type:'string',
        required: true,
    },

    like:{
        type: Number,
        default: 0,
    },

    dislike:{
        type: Number,
        default: 0,
    },

    tag:{ 
        type: 'string',
        required: true,
        enum:['България', 'Светът', 'Спорт'],
    }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;