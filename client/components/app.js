angular.module('comp')
.component('app', {
  controller: function($scope, $window) {
    this.items = window.fakeData;
    this.mainImage = window.fakeData[0];

    this.saved = null; //Will Update when GET is called

    // Drag to Saved List
    this.saveImage = (image) => {
      this.saved.push(image);
      // Post 
    };
    
    //Moves Current Item to Main Item 
    // Also get get function to server for API call
    this.updateImage = (data) => { 
      console.log('should be one', data);
      this.mainImage = data;
    };

  },

  templateUrl: '/templates/app.html'
});
