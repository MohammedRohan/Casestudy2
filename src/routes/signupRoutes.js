const express = require('express');
const signupRouter = express.Router();
const Userdata = require('../model/userdata');

function router2(nav2) {

    signupRouter.get('/', function (req, res) {
        res.render("signup",
            {
                nav2,
                title: 'Library',

            });
    });


    signupRouter.get('/', function (req, res) {
        const id = req.params.id
        res.render("welcome", {
            nav3: [{ link: '/books', name: 'Books' },
            { link: '/authors', name: 'Authors' },
            { link: '/admin', name: 'Add book' },
            {link: '/addauthor', name: 'Add Author'},
            { link: '/', name: 'Logout' }],
            title: 'Library',
        
        });
    });

    signupRouter.post('/submit', (req, res) => {
        var item = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            password2: req.body.password2,

        }
        var user = Userdata(item);
        user.save();
        res.redirect('/login');

    });

    return signupRouter;

}


module.exports = router2;