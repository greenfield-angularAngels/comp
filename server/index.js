var express = require('express');
// var bodyParser = require('body-parser');
var api = require('../api/') //check with sean
// var db = require('../database/index') //check with pav

var reqest = require('request')

var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


app.get('/items', function (req, res) {

  api.apiRequet(req.body, () => { //get fn name from sean
    res.send(data);
  })

});


app.post('/items', function (req, res) {

  db.save(req.body, () => {
    res.send(status code)
  }) //get correct fn name from pav


});

app.listen(8080, function() {
  console.log('listening on port 8080!');
});