const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts');
// flash message
const session = require('express-session');
const flash = require('connect-flash');
// passport
const passport = require('passport');
// assign LocalStrategy config 
require("./config/passport")(passport)

// use css in public/stylesheets
app.use("/static", express.static("public"));

//mongoose
// connect to my database
mongoose.connect('mongodb+srv://soph:auth123@cluster0.cixjynk.mongodb.net/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected'))
.catch((err) => console.log(err));

//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);

//BodyParser
app.use(express.urlencoded({extended: false}));

// use flash message
//express user session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());

   //use flash
   app.use(flash());
   app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
})

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})