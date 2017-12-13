const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
var path = require('path')

mongoose.connect('mongodb://localhost/reviews');
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({limit: '50mb'}));

app.use(express.static(path.join(__dirname, 'static')));

app.use(routes);

//error handling
app.use(function(err, req, res, next){
	console.log({error: err.message});
});

app.listen(8080,function(){
console.log("Server is running on port 3000")
});