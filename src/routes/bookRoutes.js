const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const bodyParser = require('body-parser');
function router(nav){

    //var books = [
    //    {
      //      title : "To Kill a Mockingbird",
        //    author : "Harper Lee",
         //   genre : "Drama",
           // description: 'To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize. The plot and characters are loosely based on Lees observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.',
            //img : "gp.jpg"
           
        //},
        //{
          //  title : "Lord of the Rings",
            //author : "J.R.R.Tolkien",
            //genre : "Mystery",
            //description: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time in the past, the story began as a sequel to Tolkien 1937 children5 book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.',
            //img : "jp.jpg"
       // },
       // {
         //   title : "The Kite Runner",
           // author : "Khaled Hosseini",
            //genre : "Drama",
            //description: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time in the past, the story began as a sequel to Tolkien 1937 children5 book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.',
            //img : "kt.jpg"
    //  }
    //]
    
    booksRouter.use(bodyParser.urlencoded({ extended: true }));
    booksRouter.get('/',function (req,res){
        Bookdata.find()
        .then(function(books){
        res.render("books",
        {
            nav,
            title:'Library',
            books
            
        });
    })
    });
    booksRouter.get('/:id',function (req,res){
        const id = req.params.id
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render("book",
            {
            nav,
            title:'Library',
            book
            
            });
        })    
    }); 

    booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id
        Bookdata.deleteOne({_id:id})
        .then(function(){
            res.redirect('/books');
        });  
    });

    booksRouter.get('/updatebook/:id', function (req, res) {
        const id = req.params.id
        Bookdata.findOne({ _id: id })
            .then(function (book) {
                res.render("updatebook", {
                    nav,
                    title: 'Library',
                    book
                });
            });
    });

    booksRouter.post('/updatebook/:id/submit', function (req, res) {
        const item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            image: req.body.image
        }
        const id = req.params.id
        Bookdata.updateOne({ _id:id}, item)
            .then(function () {
                res.redirect('/books');
            });
        });
    


    
    return booksRouter;


}


module.exports = router;
