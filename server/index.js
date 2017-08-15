var express = require('express');
<<<<<<< HEAD
var bodyParser = require('body-parser');
var api =  require('../API_related/') //check with sean
// var db = require('../database/index') //check with pav
var request = require('request')
var app = express();
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())



app.get('/images', function (req, res) {

  api.fiveGuessesFromGoogle(req.body, () => { 
    res.json(data);
  })

});


app.post('/user', function (req, res) {

  db.save(req.body, () => {
    res.send(data)
  }) //TODO -get correct fn name from pav
});


app.get('/user', function (req, res) {

  db.get(req.body, () => {
    res.send(data)
  }) //TODO -get correct fn name from pav
});


app.listen(8080, function() {
  console.log('listening on port 8080!');
});