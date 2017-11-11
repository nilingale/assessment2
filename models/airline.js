const mongoose = require('mongoose');

const AirlineSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    slogen:{
        type: String,
        required: true
    },
    flights:{
        type: String,
        required: true
    }
});

const Airline = module.exports = mongoose.model('Contact', AirlineSchema);