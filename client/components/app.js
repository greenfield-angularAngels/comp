angular.module('comp')
.component('app', {
  controller: function(dunno, $window) {
    this.saved = window.fakeData;
    this.image = window.fakeData[0];

    // Drag to Saved List
    this.saveImage = (image) => {
      this.saved.push(image);
    };
    
    //Moves Current Item to Main Search
    this.updateImage = (data) => { 
      console.log(data, 'should be one');
      this.image = data;
    };

  },

  templateUrl: 'client/templates/app.html'
});
