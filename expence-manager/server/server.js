var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var app = express();
var bodyParser = require("body-parser")
var mongoose = require("mongoose");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

var connected= mongoose.connect('mongodb://localhost:27017/Expense-managerDB', function(err, db){
    if(err)
    { 
        throw err
    }
    else {
        console.log("Connected with database" + connected);
    }
})
app.use('/', router);
module.exports=app;