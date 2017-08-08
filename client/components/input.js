angular.module('video-player')

.component('input', {
  controller: function(input) {
    console.log('controller', input);
    this.handleClick = () => {
      
    }
    // this.youTube = () => {
    //   youTube.getVideos(this.query, this.key, (data) => { 
    //     this.result(data);
    //   });
    // };
  },

  bindings: {
    service: '<',
    result: '<',
    key: '<'
  },

  templateUrl: 'client/templates/input.html'

});
