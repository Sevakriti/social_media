const UserModel = require('../model/userModel');

let user = {}


user.getuser = (req, res) => {
    let useremail = req.body.email;
    let userpassword = req.body.password;

    UserModel.findOne({email: useremail}, (err, data)=>{
        if(!err){
            if(data.email === useremail && data.password === userpassword){
                res.cookie("username", data.email, { 
                    httpOnly: true, 
                    secure: true, //changes secure
                    sameSite: 'None', 
                    maxAge: 24 * 60 * 60 * 1000 
                }).cookie('name', ""+ data.firstname + " " + data.lastname);
                
                res.redirect('/login');
            }
            else{
                res.redirect('/login');  
            }
        }
        else{
            res.redirect('/login')
        }
    });
}


user.login = (req, res) => {
    if(req.cookies && req.cookies.username){
        res.redirect('/');
    }
    else{
        var data = {
            title :"Login Form",
        }
        res.render('login', {data});
    }
}


user.signup = (req, res) => {
    if(req.cookies && req.cookies.username){
        res.redirect('/');
    }
    else{
        var data = {
            title :"Signup",
        }
        res.render('signup', {data});
    }
    
}



user.adduser = (req, res)=>{
    let firstName = req.body.firstname;
    let lastName = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;

    const user = new UserModel({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password    
    });
    user.save();

    res.cookie("username", user.email, { 
            httpOnly: true, 
            secure: true, //changes secure
            sameSite: 'None', 
            maxAge: 24 * 60 * 60 * 1000 
        }).cookie('name', ""+ firstName + " " + lastName);

    res.redirect('/signup');
}


user.profile = (req, res)=>{
    var data = {
        title: 'Profile - ' + req.cookies.name,
        name: req.cookies.name,
        email: req.cookies.username
    }
    res.render('profile',{data})
}


user.logout = (req, res)=>{
    res.clearCookie("username");
    res.clearCookie("name");
    res.redirect('/');
}



module.exports = user;
