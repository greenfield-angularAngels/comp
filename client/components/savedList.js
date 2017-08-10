angular.module('comp')
.component('savedList', {

  bindings: {
    images: '<',
    onClick: '<'
  },

  templateUrl: '/templates/savedList.html'
});
