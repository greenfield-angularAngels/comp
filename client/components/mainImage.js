angular.module('comp')
.component('picture', {

  controller: function() {
    console.log('mainImage', this);
    // Execute a GET request to server to get the image
    // this.youTube = () => {
    //   youTube.getVideos(this.query, this.key, (data) => { 
    //     this.result(data);
    //   });
    // };
  },

  bindings: {
    input: '<',
    // onClick: '<'
  },
  
  templateUrl: '/templates/mainImage.html'

});
