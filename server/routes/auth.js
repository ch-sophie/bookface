const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// const cors = require("cors");


// register POST
router.post("/register", async (req, res) => {
    try {
        // generate new password
        // hash + salt to make password secure ++ 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        // create new user
        const newUser = new User({
            // username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
        });
        
        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
        console.log("user created");
        } catch (err){
        res.status(500).json(err);
    }
});

// Login POST email and password
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found"); 
        
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password");
        
        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    } 
}); 


module.exports = router;