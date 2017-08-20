import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import data from './dummy_data.js';
import ImageList from './components/ImageList.jsx';
import SavedList from './components/SavedList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: undefined,
      data: data[0],
      saved: []
    };
    this.saveImage = this.saveImage.bind(this);
  }

  /***ComponentDidmount
  Will make an ajax call to the server, which will grab all the saved images for the user, then render that to the user via setState.
  ***/
  componentDidMount() {
    console.log('Component Mounted!', data);
    let that = this;
    // Get all saved items from the DB
    $.ajax({
      method: 'GET',
      url: '/user', 
      success: function(results) {
        console.log('Client Get Success', results);
        that.setState({
          saved: results
        });
      },
      error: function(err) {
        console.log('Client Err', err);
      }
    });
  }

  /***
    Adds Image to the Saved Array, upon click of button, we will send a POST request to the server to add this image to the DB.
  ***/
  saveImage(image) {  
    // var newImage = event.target.value; 
    console.log('Saved!', image);
    var newArray = this.state.saved.slice();
    newArray.push(image);

    let that = this;
      $.ajax({
        method: 'POST',
        url: '/user',
        data: image,
        success: function(results) {
          console.log('Client Post Success', results);
          that.setState({
            saved: newArray
          });
        },
        error: function(err) {
          console.log('Client Err', err);
        }
      });

  }

  render() {
    console.log('App Render Triggered')
    return (
      <div>
        <h1>Comp</h1>
        <div className="app">
          <ImageList list={this.state.data} saveImage={this.saveImage}/>
          <div className="category">
            <h3>Saved</h3>
            <SavedList saved={this.state.saved}/>
          </div>

        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

