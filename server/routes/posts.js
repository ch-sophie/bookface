const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
        console.log("post created");
    } catch (err){
        res.status(500).json(err);
    }
});

// update with userId
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("updated");
        } else{
            res.status(403).json("you can only update your post");
        }
    } catch (err){
        res.status(500).json(err);
    }
});

// delete a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("deleted");
        } else{
            res.status(403).json("you can only delete your post");
        }
    } catch (err){
        res.status(500).json(err);
    }
});

// like/dislike
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push:{likes: req.body.userId}});
            res.status(200).json("liked");
        } else{
            await post.updateOne({$pull:{likes: req.body.userId}});
            res.status(200).json("disliked");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err){
        res.status(500).json(err);
    }
});

// get all posts
router.get("/", async (req, res) => {
    try {
        const post = await Post.find({}).then(function (user) {
            res.status(200).json(user);
        });
    } catch (err){
        res.status(500).json(err);
    }
});

// get timeline posts
router.get("/timeline/all", async (req, res) => {
    try {
        const post = await Post.find({}).then(function (user) {
            res.status(200).json(user);
        });
    } catch (err){
        res.status(500).json(err);
    }
});

// get timeline posts
router.get("/timeline/:userId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({userId: friendId});
            }));
            res.status(200).json(userPosts.concat(...friendPosts))
        } catch (err) {
            res.status(500).json(err);
        }
});

module.exports = router;