angular.module('video-player')

.component('image', {
  controller: function(image) {
    console.log('controller', image);
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

  templateUrl: 'client/templates/image.html'

});
