const request = require('request');

const textsToImgs = require('./API_Bing_txtToImgs');

var vision = require('@google-cloud/vision')({
  projectId: 'axial-totality-174223',
  keyFilename: __dirname + '/My Project-be76538ea7d5.json'
});

// EXAMPLE URLS 
// var imageUri = 'https://s4.favim.com/orig/48/puppy-lion-cute-Favim.com-445038.jpg';
// var imageUri = 'http://www.ngkenya.com/thumbs/inve0080.jpg';

var originImgToSimilarImgs = (imageUri, callback) => {

  var image = { source: {imageUri: imageUri} }
  
  vision.labelDetection(image).then(response => {
    var fiveGuesses = [];

    response[0].labelAnnotations.forEach(function(resultsFromGoo) {
      fiveGuesses.push(resultsFromGoo.description);
    });

    textsToImgs(fiveGuesses, callback);
  }).catch(err => {
    console.error('!!! ERR from GOOBLE CLOUD VISION API !!!');
  });

};

module.exports = originImgToSimilarImgs;

