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
        slogen: req.body.slogen,
        flights: req.body.flights
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


module.exports = router;