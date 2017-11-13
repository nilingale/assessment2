const mongoose = require('mongoose');

const AirlineSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    logo:{
        data: Buffer, 
        contentType: String
    },
    founded:{
        type: Date, 
        default: Date.now,
        required: true
    }, 
    hubs:{
        type: Array,
        required: true
    },
    focusCities:{
        type: Array
    },
    destinations:{
        type: Array,
        required: true
    },
    originCountry:{
        type: String,
        required: true
    },
    slogen:{
        type: String
    },
    rewards:{
        type: String
    },
    rating:{
        type: Number
    }
});

const Airline = module.exports = mongoose.model('Contact', AirlineSchema);