const express = require("express");
const authorRouter = express.Router();
const Authdata = require('../model/Authdata');
const bodyParser = require('body-parser');
function router1(nav) {
    var authors = [
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            genre: 'Mystery',
            description: 'Nelle Harper Lee was an American novelist best known for her 1960 novel To Kill a Mockingbird. It won the 1961 Pulitzer Prize and has become a classic of modern American literature. Lee published only two books, yet she was awarded the Presidential Medal of Freedom in 2007 for her contribution to literature. She also received numerous honorary degrees, though she declined to speak on those occasions. She assisted her close friend Truman Capote in his research for the book In Cold Blood (1966). Capote was the basis for the character Dill Harris in To Kill a Mockingbird.',
            img: 'zq.jpg'
        },
        {
            title: 'Lord of the Rings',
            author: 'J.R.R.Tolkien',
            genre: 'Fiction',
            description: 'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings.He served as the Rawlinson and Bosworth Professor of Anglo-Saxon and Fellow of Pembroke College, Oxford from 1925 to 1945 and the Merton Professor of English Language and Literature and Fellow of Merton College, Oxford from 1945 to 1959.[3] He was a close friend of C. S. Lewis, a co-member of the informal literary discussion group The Inklings. Tolkien was appointed a Commander of the Order of the British Empire by Queen Elizabeth II on 28 March 1972.',
            img: 'ui.jpg'
        },
        {
            title: 'The Kite Runner',
            author: 'Khaled Hosseini',
            genre: 'Drama',
            description: 'Khaled Hosseini is an Afghan-American novelist, physician, activist, humanitarian, and UNHCR goodwill ambassador.His debut novel The Kite Runner (2003) was a critical and commercial success; the book, as well as his subsequent novels, have all been at least partially set in Afghanistan and has featured an Afghan as the protagonist.',
            img: 'ki.jpg',

        }]

        authorRouter.use(bodyParser.urlencoded({ extended: true }));
        authorRouter.get('/',function (req,res){
            Authdata.find()
            .then(function(authors){
            res.render("authors",
            {
                nav,
                title:'Library',
                authors
                
            });
        })
        });
        authorRouter.get('/:id',function (req,res){
            const id = req.params.id
            Authdata.findOne({_id: id})
            .then(function(author){
                res.render("author",
                {
                nav,
                title:'Library',
                author
                
                });
            })    
        }); 

        authorRouter.get('/delete/:id', function (req, res) {
            const id = req.params.id
            Authdata.deleteOne({ _id: id })
                .then(function () {
                    res.redirect('/authors');
                });
        });

        authorRouter.get('/updateauthor/:id', function (req, res) {
            const id = req.params.id
            Authdata.findOne({ _id: id })
                .then(function (author) {
                    res.render("updateauthor", {
                        nav,
                        title: 'Library',
                        author
                    });
                });
        });
    
        authorRouter.post('/updateauthor/:id/submit', function (req, res) {
            const item = {
                name: req.body.name,
                book: req.body.book,
                genre: req.body.genre,
                description: req.body.description,
                image: req.body.image
            }
            const id = req.params.id
            Authdata.updateOne({ _id:id}, item)
                .then(function () {
                    res.redirect('/authors');
                });
            });
    


        
        return authorRouter;
    
    
    }
    


module.exports = router1;