const { compile } = require('ejs');
const postModule = require('../model/postModel');

let home = {}

home.gethome = (req, res) =>{
    postModule.find({}, (err, data)=>{
        if(!err){
            data.reverse();
            
            var value = {
                title: "Home page",
                posts: data,
                name: req.cookies.name
            }
            res.render('home', {data: value});
        }
        else{
            var value = {
                title: "Home page",
            }
            res.render('home', {data: value});
        }
    });
}

home.addPost = (req, res) =>{
        let content = req.body.content;

        var post = new postModule({
            email: req.cookies.username,
            content: content
        });

        post.save();

        res.redirect('/');
    }

module.exports = home;
