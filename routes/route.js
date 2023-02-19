const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookies = require('cookie-parser');

// Parse URL-encoded bodies (as sent by HTML forms)
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const homeController = require('../controller/homeController');
const userController = require('../controller/userController');

//use cookie
app.use(cookies());


app.get('/', homeController.gethome);
app.post('/addPost', urlencodedParser, homeController.addPost);

app.get('/profile', userController.profile);

app.get('/signup', userController.signup);
app.post('/signup', urlencodedParser, userController.adduser);

app.get('/login', userController.login);
app.post('/login', urlencodedParser, userController.getuser); 

app.get('/logout', userController.logout);



module.exports = app;
