const express = require('express');
const addauthorRouter = express.Router();
const Authdata = require('../model/Authdata');
function router(nav){
addauthorRouter.get('/',function (req,res){
    res.render("addauthor",
    {
        nav,
        title:'Library',
        
        
    })
})

    addauthorRouter.post('/add',function(req,res){
        var item = {
        name : req.body.name,
        book: req.body.book,
        genre : req.body.genre,
        description : req.body.description,
        image : req.body.image

        }
        var author =  Authdata(item);
        author.save();
        res.redirect('/authors');
    });

    return addauthorRouter;
}

module.exports = router;
