const express = require('express');
const path = require('path');
const app = require('./routes/route');


// Static File routes for media(Images, CSS, JS)
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));


// Set view engine for template
app.set('view engine', 'ejs');



app.listen(5000);



