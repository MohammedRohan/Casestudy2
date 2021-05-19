const express =  require('express');
const welcomeRouter = express.Router();


var authors = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Mystery',
        description: 'To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize. The plot and characters are loosely based on Lees observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.',
        img: 'gp.jpg'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R.Tolkien',
        genre: 'Fiction',
        description: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time in the past, the story began as a sequel to Tolkien 1937 children5 book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.',
        img: 'jp.jpg'
    },
    {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        genre: 'Drama',
        description:'The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul. The story is set against a backdrop of tumultuous events, from the fall of Afghanistans monarchy through the Soviet military intervention, the exodus of refugees to Pakistan and the United States, and the rise of the Taliban regime.',
        img: 'kt.jpg'

    }]

function router(nav){
    welcomeRouter.get('/',function(req,res){
       
            res.render("welcome",
        {
             nav,
             title: 'Library',
             authors
            });

        });

    return welcomeRouter;

}


module.exports = router;