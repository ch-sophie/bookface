const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');
const passport = require('passport');

//login handle
// handle GET requests
router.get('/login',(req, res) => {
    res.render('login');
})
router.get('/register',(req, res) => {
    res.render('register');
})

//Register handle
// handle POST requests
router.post('/login', (req, res, next) => {
    // If the user has successfully logged in = redirect to dashboard directory (successRedirect)
    // If the user does not log in successfully = redirect to login directory (failureRedirect)
    // Get flash messages when an error occurs (failureFlash)
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
})

  //register post handle
  router.post('/register', (req, res) => {
    // extract data from form
    const {firstName, name, email, password, password2} = req.body;
    let errors = [];
    console.log(' First name ' + firstName + ' Last name ' + name + ' Email: ' + email + ' Password: ' + password);
    if(!firstName || !name || !email || !password || !password2) {
        errors.push({msg: "Please fill in all fields"})
    }

    //check if passwords match
    if(password !== password2) {
        errors.push({msg: "Passwords do not match"});
    }
    
    //check if password is more than 6 characters
    if(password.length < 6) {
        errors.push({msg: 'Password must be at least 6 characters'})
    }

    // If any content within the error array is present, re-render the register.ejs page and then send the appropriate data along with the errors array.
    if(errors.length > 0 ) {
    res.render('register', {
        errors: errors,
        firstName: firstName,
        name: name,
        email: email,
        password: password,
        password2: password2})
     } else{
        //validation passed
       User.findOne({email: email}).exec((err, user) => {
        console.log(user);   
        if(user) { 
            errors.push({msg: 'Email already registered'});
            res.render('register',{errors, firstName, name, email, password, password2})  
           } else{
            const newUser = new User({
                firstName: firstName,
                name: name,
                email: email,
                password: password
            });
    
            //hash password 
            bcrypt.genSalt(10,(err, salt) => 
            bcrypt.hash(newUser.password, salt,
                (err, hash)=> {
                    if(err) throw err;
                        //save pass to hash
                        newUser.password = hash;
                    //save user
                    newUser.save()
                    .then((value)=>{
                        console.log(value)
                        // flash message
                        req.flash('success_msg', 'You have now registered!');
                        res.redirect('/users/login');
                    })
                    .catch(value=> console.log(value));
                }));
            }
        })
    }
})

//logout
router.get('/logout',(req,res) => {
req.logout(req.user, err => {
    if(err) return next(err);
});

req.flash('success_msg','Now logged out');

res.redirect('/users/login'); 
})

module.exports  = router;