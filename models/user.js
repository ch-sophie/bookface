const mongoose = require('mongoose');
const UserSchema  = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    name:{
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
        default : Date.now
    }
});

// all users will have same user schema = same model
const User = mongoose.model('User',UserSchema);

module.exports = User;