angular.module('comp')
.service('youTube', function($http, $window) {
  // name must match argument from controller of function
    
  this.getVideos = function(query, apiKey, callback) {
    // console.log(window.YOUTUBE_API_KEY);
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        q: query,
        videoEmbeddable: 'true',
        type: 'video',
      },
    })
    .then(function(response) {
      console.log('youtube service successful!', response);
      callback(response.data.items);
    })
    .catch(function(response) {
      console.log('youtube service fail', response);
    });  
  };
});
