angular.module('comp')
.service('youTube', function($http, $window) {
  // name must match argument from controller of function
  this.getVideos = function(query, callback) {
    // console.log(window.YOUTUBE_API_KEY);
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
      },
    })
    .then(function(response) {
      console.log('API Get successful!', response);
      callback(response.data.items);
    })
    .catch(function(response) {
      console.log('API Get fail', response);
    });  
  };
});
