const mongoose = require('mongoose');
const db = require('../db');

const postSchema = new mongoose.Schema({
    email: String,
    content: String    
});

const PostModel = new mongoose.model("posts", postSchema);

module.exports = PostModel;
