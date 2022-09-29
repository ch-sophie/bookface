const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require("../config/auth")

//login page
// when the user navigates to the root directory (performs a GET request) render the welcome.ejs page
router.get('/', (req, res) => {
    res.render('welcome');
})

//register page
// when the user does a GET request to the register page, render the register.ejs page
router.get('/register', (req, res) => {
    res.render('register');
})

// redirect to dashboard
router.get('/dashboard', ensureAuthenticated, (req,res) => {
    res.render('dashboard', {
        user: req.user
    });
})

// export the router instance so that it can be used in other files
module.exports = router; 