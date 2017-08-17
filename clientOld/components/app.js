var app = angular.module("comp", []); 

app.controller("comp", function($scope) {
    // console.log(this, 'test');
    // this.items = window.fakeData;
    // this.mainImage = window.fakeData[0];

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

});

app.templateUrl = '/templates/app.html';
