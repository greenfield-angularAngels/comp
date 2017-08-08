angular.module('comp')
.component('savedList', {

  bindings: {
    saved: '<',
    onClick: '<'
  },

  templateUrl: 'client/templates/savedList.html'

});
