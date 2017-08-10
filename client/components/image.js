/***
Individual Components for Returned Search. Upon Click
***/
angular.module('comp')
.component('image', {
  controller: function(image) {
    console.log('controller', image);
    this.handleClick = () => {

    };
  },

  bindings: {
    result: '<',
    key: '<',
  },

  templateUrl: 'templates/image.html'

});
