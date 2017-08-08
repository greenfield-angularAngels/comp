angular.module('comp')
.component('app', {
  controller: function(dunno, $window) {
    this.saved = window.exampleVideoData;
    this.input = window.exampleVideoData[0];

    // Drag to Saved List
    this.saveImage = (image) => {
      this.saved.push(image);
    };

    this.updateImage = (data) => { //Moves Current Item to Main Search
      console.log(data, 'should be one');
      this.input = data;
    };

  },

  templateUrl: 'client/templates/app.html'
});
