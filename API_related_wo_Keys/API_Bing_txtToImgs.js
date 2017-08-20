
const API_KEYS = require('../API_KEYS/apiKeys');
const bingAccKeys = API_KEYS.bingAccKeys;


var Bing = require('node-bing-api')({ accKey: bingAccKeys });

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

module.exports = textsToImgs;


