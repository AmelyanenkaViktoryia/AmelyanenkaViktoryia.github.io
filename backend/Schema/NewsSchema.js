const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    author: {type: String, min: [3, 'Too small Title']},
    title: {type: String, min: [3, 'Too small Author name']},
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String
});

const NewsModel = mongoose.model('News', NewsSchema);

module.exports = NewsModel;
