const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// get a user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc;
        res.status(200).json(other);
    } catch (err){
        res.status(500).json(err);
    }
});

// get all  users
router.get("/", async (req, res) => {
    try {
        const user = await User.find({}).then(function (user) {
            res.status(200).json(user);
            console.log("All users retrieved");
        });
    } catch (err){
        res.status(500).json(err);
    }
});

// update user edit and userId
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err){
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account updated");
            console.log("updated");
        } catch (err){
            return res.status(500).json(err);
        }
    } else{
        return res.status(403).json("error");
    }
});

// delete userId
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account deleted");
            console.log("deleted");
        } catch (err){
            return res.status(500).json(err);
        }
    } else{
        return res.status(403).json("error");
    }
});

// follow
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({$push:{followers: req.body.userId}});
                await currentUser.updateOne({$push:{followings: req.params.id}});
                res.status(200).json("you follow this user");
            } else{
                res.status(403).json("you already follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("you cannot follow yourself");
    }
});

// unfollow
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({$pull:{followers: req.body.userId}});
                await currentUser.updateOne({$pull:{followings: req.params.id}});
                res.status(200).json("you unfollow this user");
            } else{
                res.status(403).json("you do not follow this user");
            }
        } catch (err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("you cannot unfollow yourself");
    }
});

module.exports = router;