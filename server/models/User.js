const mongoose = require("mongoose");

const UserSchema  = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    profilePicture:{
        type: String,
        default: ""
    },
    followers:{
        type: Array,
        default: [],
    },
    followings:{
        type: Array,
        default: [],
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
},
    {timestamps: true}
);

// all users will have same user schema = same model
module.exports = mongoose.model("User", UserSchema);