const express = require('express');
const loginRouter = express.Router();
const Userdata=require('../model/userdata');
let mssg = "";

function router3(nav3) {

    loginRouter.get('/', function (req, res) {
        res.render("login",
            {
                nav3,
                title: 'Library',

            });
    });
    loginRouter.get('/',function(req,res){
        const id = req.params.id
        res.render("welcome",{
            nav3:[{link:'/books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/admin',name:'Add Book'},
            {link:'/addauthor',name:'Add Author'},
            {link:'/',name:'Logout'}],
            title: 'Library',
            
        });
    });

    loginRouter.post("/welcome",function(req,res){
        var email = req.body.email;
        var password = req.body.password;

        Userdata.findOne({ email : email,password:password},function(err,user){
            if(err)
            {
                console.log("err") ;
                
            }
            else if (!user)
            {
                    mssg = "Invalid credentials, Create an account or Retry"
                    res.redirect("/login/loginmsg");  
            }
            else
            {
                res.redirect("/welcome");  
            }
            
        })
    });

    loginRouter.get("/loginmsg",function(req,res){
        res.render("loginmsg",{
            nav3:[{link:'/signup',name:'Sign up'},{link:'/login',name:'Login'}],
            title:'Library',
            mssg
        });
    });

return loginRouter;

    }

module.exports = router3;