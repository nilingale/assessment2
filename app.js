//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/airlinesinfo');

//on db connection
mongoose.connection.on('connected', ()=>{
    console.log('Mongodb connection successful.');
});

mongoose.connection.on('error', (err) =>{
    console.log('Failed to connect to Mongodb with error: ' + err);
});

//port no
const port = 3000;

//add middleware - cors
app.use(cors());

//add middleware body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);


//testing server
app.get('/',(req, res) => {
    res.send('foober');
});

app.listen(port,()=>{
    console.log('Server started at port:' + port);
});
