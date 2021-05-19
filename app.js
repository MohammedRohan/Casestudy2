const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const nav = [
    { link: '/books', name: 'Books' },
    { link: '/authors', name: 'Authors' },
    { link: '/admin', name: 'Add Book'},
    { link: '/addauthor', name: 'Add Author'},
    {link:'/',name:'Logout'}
]

const nav1 = [
    {link:'/signup',name:'SignUp'}, 
    {link:'/login',name:'Login'}
]

const nav2 = [
    {link:'/lOGIN',name:'Login'}
]

const nav3 = [ 
    
    {link:'/signup',name:'Sign Up'}    
]






const adminRouter = require('./src/routes/adminRoutes')(nav); 
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);   
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav2);
const loginRouter = require('./src/routes/loginRoutes')(nav3);
const welcomeRouter = require('./src/routes/welcomeRoutes')(nav);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views')
app.use('/books',booksRouter);
app.use('/authors', authorRouter);
app.use('/admin', adminRouter);
app.use('/addauthor', addauthorRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/welcome',welcomeRouter);

app.get('/',function (req,res){
    res.render("index",
    {
        nav1,
        title:'Library',

        
    });
});

app.listen(port, () => {
    console.log("Server Ready at " + port)
});


