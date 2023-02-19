const mongoose = require('mongoose');
const db = require('../db');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String    
});

const UserModel = new mongoose.model("users", userSchema);

module.exports = UserModel;