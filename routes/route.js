const express = require('express');
const router = express.Router();

const Airline = require('../models/airline');

//retriving data
router.get('/airlines', (req, res, next) =>{
   Airline.find(function(err, airelines){
       res.json(airelines);
   });
});

//add airline
router.post('/airline', (req, res, next) =>{
    let newAirline = new Airline({
        name: req.body.name,
        logo: req.body.logo,
        founded: req.body.founded, 
        hubs: req.body.hubs,
        focusCities: req.body.focusCities,
        destinations: req.body.destinations,
        originCountry: req.body.originCountry,
        slogen: req.body.slogen,
        rewards: req.body.rewards,
        rating: req.body.rating
    });

    newAirline.save((err, airline) =>{
        if(err){
            res.json({msg: 'failed to add airline'});
        }else{
            res.json({msg: 'Airline added successfully.'});
        }
    });
});

//delete airline
router.delete('/airline/:id', (req, res, next) =>{
    Airline.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


//For Users
const User = require('../models/user');

//retriving data
router.get('/users', (req, res, next) =>{
   User.find(function(err, airelines){
       res.json(airelines);
   });
});

//add user
router.post('/user', (req, res, next) =>{
    console.log(req);
    let newUser = new User({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    });

    newUser.save((err, user) =>{
        if(err){
            res.json({msg: 'failed to add user', error: err});
        }else{
            res.json({msg: 'User added successfully.'});
        }
    });
});

//delete user
router.delete('/user/:id', (req, res, next) =>{
    User.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


module.exports = router;