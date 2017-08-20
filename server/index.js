var express = require('express');
var bodyParser = require('body-parser');
var originImgToSimilarImgs =  require('../API_related/API_GoogleCV_ImgToTxts.js')
// var db = require('../database/index') //check with pav
var request = require('request')
var app = express();

app.use(express.static(__dirname + '/../client'));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())


app.post('/images', function (req, res) {

  console.log(req.body.imageUri);

  originImgToSimilarImgs(req.body.imageUri, (data) => { 
    res.json(data);
  })

});


app.post('/user', function (req, res) {

  db.saveImg(req.body, (data) => {
    res.send(data)
  }) //TODO -get correct fn name from pav
});


app.get('/user', function (req, res) {

  res.send('data test')

  // db.get(req.body, () => {
  //   res.send('data')
  // }) //TODO -get correct fn name from pav
});


app.listen(8080, function() {
  console.log('listening on port 8080!');
});