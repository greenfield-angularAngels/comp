var express = require('express');
var bodyParser = require('body-parser');
var originImgToSimilarImgs =  require('../API_related_wo_Keys/API_GoogleCV_ImgToTxts.js')
// var db = require('../database/index') //check with pav
var request = require('request')
var Bing = require('node-bing-api')({ accKey: "a44aa769c3534dd284dbcf271bf037de" });
var app = express();

const PictureModel = require('../database/index')

app.use(express.static(__dirname + '/../client'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.post('/images', function (req, res) {

  console.log(req.body.imageUri);

  originImgToSimilarImgs(req.body.imageUri, (data) => {
    res.json(data);
  });


app.get('/pics', (req, res) => {
  PictureModel.find()
  .then(pics => res.send(pics))
  .catch(err => res.send(err));
})

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

app.post('/upload-pics', (req, res) => {

var textsToImgs = (fiveGuesses, sendResToClient) => {

  var fiveGuessesAnd25Urls = [];
  var asyncCount = 0;

  fiveGuesses.forEach((text) => {

    Bing.images(text, {count: 5}, function(error, res, body){

      var guess = text;
      var urls = [];

      var resultsFromBing = body.value;
      resultsFromBing.forEach(function(data){
        urls.push(data.thumbnailUrl)
      })

      var oneGuessAndFiveUrls = {
        'guess': guess,
        'urls': urls
      };

      fiveGuessesAnd25Urls.push(oneGuessAndFiveUrls);

      asyncCount++;
      if (asyncCount === fiveGuesses.length) {
        console.log('-----');
        console.log(fiveGuessesAnd25Urls);
        sendResToClient(fiveGuessesAnd25Urls);
        console.log('----');
      }
    });
  });
 }
});


app.listen(8080, function() {
  console.log('listening on port 8080!');
});