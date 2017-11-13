const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    middleName:{
        type: String
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
    }
});

const User = module.exports = mongoose.model('User', UserSchema);