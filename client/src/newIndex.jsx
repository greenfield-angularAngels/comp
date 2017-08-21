import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import data from './dummy_data.js';
import ImageList from './components/ImageList.jsx';
import SavedList from './components/SavedList.jsx';
// http://www.michiganduckrescueandsanctuary.com/wp-content/uploads/2014/12/marold_donate_transparent_504.png
// https://s4.favim.com/orig/48/puppy-lion-cute-Favim.com-445038.jpg
// const originalImgUrl = {"imageUri": "https://s4.favim.com/orig/48/puppy-lion-cute-Favim.com-445038.jpg"};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: '',
      // twentyFiveUrls: [],
      twentyFiveUrls: data,
      originImgUrl: {"imageUri": "https://s4.favim.com/orig/48/puppy-lion-cute-Favim.com-445038.jpg"},
      userInput: ''
    };
    this.postOriginalImg = this.postOriginalImg.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /***ComponentDidmount
  Will make an ajax call to the server, which will grab all the saved images for the user, then render that to the user via setState.
  ***/
  componentDidMount() {
    // this.postOriginalImg(this.state.originImgUrl);
  }

  postOriginalImg(originalImgUrl) {
    $.ajax({
      method: 'POST',
      url: '/images',
      data: originalImgUrl,
      success: (results) => {
        console.log('Client POST Original Img Success', results);
        this.setState({
          twentyFiveUrls: results
        })
      },
      error: function(err) {
        console.log('Client POST Err', err);
      }
    })
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  handleClick() {
    var originImgUrl = {imageUri: this.state.userInput};
    console.log('click ', originImgUrl)
    this.setState({
      originImgUrl: originImgUrl
    });
    // this.postOriginalImg(originImgUrl);
  }

  render() {
    return (
      <div>

      <div className="well" id="title"><h1>ImgNest</h1></div>
      
      <div className="container"> 
        <div className="row">
          <div className="form-group">

            <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-2">
              <input 
                type="text" 
                className="form-control input-lg" 
                value={this.userInput}
                placeholder="Search for..."
                onChange={this.handleChange}
              />
            </div>
            <div>
              <p className="btn btn-success btn-lg" onClick={this.handleClick}> GO !</p>
            </div>

          </div>
        </div>
      </div> 


      <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="thumbnail">
                <img src={this.state.originImgUrl.imageUri} />
                <div className="caption">
                  {/* <h3>Thumbnail label</h3> */}
                </div>
              </div>
            </div>
          </div>
      </div>

       <div className="well"></div> 
      {/* <hr/> */}

      <div className="col-md-1 col-lg-1"/>
    
      <div className="row">
      {this.state.twentyFiveUrls.map((guessAndUrls) => {
        return (
          <div className="col-md-2 col-lg-2">
              <div className="thumbnail">
                <img src={guessAndUrls.urls[0]} />
                <div className="row">
                  <div className="col-md-2 col-lg-2"/>
                   <div className="col-md-4 col-lg-4"> <a href="#" className="btn btn-primary" role="button">Like !</a></div> 
                  <div className="col-md-4 col-lg-4"> <a href="#" className="btn btn-success" role="button">Go !</a></div>
                </div>
              </div>
            </div>
        );
      })}
        </div>
    </div> 
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

