angular.module('comp')
.component('picture', {

  // PictureEntry is going to be used for results and for savedlist

  bindings: {
    input: '<',
    onClick: '<'
  },
  
  templateUrl: 'client/templates/picture.html'

});
