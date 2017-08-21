import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Dropzone from 'react-dropzone';

import data from './dummy_data.js';
import ImageList from './components/ImageList.jsx';
import SavedList from './components/SavedList.jsx';
// http://www.michiganduckrescueandsanctuary.com/wp-content/uploads/2014/12/marold_donate_transparent_504.png
// https://s4.favim.com/orig/48/puppy-lion-cute-Favim.com-445038.jpg
// const originalImgUrl = {"imageUri": "https://s4.favim.com/orig/48/puppy-lion-cute-Favim.com-445038.jpg"};

// TODO: We need to get this collection from Mongoose
const PictureCollection = 'TODO'

// function onFileUploaded(acceptedFiles, rejectedFiles) {
//   acceptedFiles.forEach(file => {
//         const reader = new FileReader();
//         reader.onload = () => {
//             const fileAsBinaryString = reader.result;
//             // Store the file content in the database
//             const newPicture = {
//               name: 'GET THIS FROM FILE READER',
//               content: fileAsBinaryString,
//             }
//             // PictureCollection.insert(newPicture)
//             // Do error handling with callback or promise

//         };
//         reader.onabort = () => console.log('file reading was aborted');
//         reader.onerror = () => console.log('file reading has failed');

//         reader.readAsBinaryString(file);
//     });
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: '',
      twentyFiveUrls: [],
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
<<<<<<< HEAD
    console.log('Component Mounted!', data);
    // let that = this;
    // // Get all saved items from the DB

    // // Query the  database for all pictures
    // PictureCollection.find({}, (pictureDocuments) => {
    //   // pictureDocuments = [{ url }, { url }, ...]
    //   this.setState({
    //     // TODO: Think about how to structure this for storage in the state
    //     saved: pictureDocuments
    //   })
    // })


    /*$.ajax({
      method: 'GET',
      url: '/user',
      success: function(results) {
        console.log('Client Get Success', results);
        that.setState({
          saved: results
        });
=======
    this.postOriginalImg(this.state.originImgUrl);
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
>>>>>>> Able to bring five pics from original pics
      },
      error: function(err) {
        console.log('Client POST Err', err);
      }
<<<<<<< HEAD
    });*/

  }

  /***
    Adds Image to the Saved Array, upon click of button, we will send a POST request to the server to add this image to the DB.
  ***/

  saveImage(image) {
    // var newImage = event.target.value;
    /*console.log('Saved!', image);
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
      */

      // TODO: Get binary data or base64 from image
      // PictureCollection.insert(newPicture)
      // Do error handling with callback or promise


=======
    })
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }
>>>>>>> Able to bring five pics from original pics

  handleClick() {
    var originImgUrl = {imageUri: this.state.userInput};
    console.log('click ', originImgUrl)
    this.setState({
      originImgUrl: originImgUrl
    });
    this.postOriginalImg(originImgUrl);
  }


  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>Comp</h1>
        <button onClick={this.onFileUploaded}>Upload picture</button>
        <ImageUpload/>
        {/* need to style this as a file dropzone */}
        <div onDrop={onFileUploaded}></div>
        <div className="app">
          <ImageList list={this.state.data} saveImage={this.saveImage} pictures={this.pictures}/>
          <div className="category">
            <h3>Saved</h3>
            <SavedList saved={this.state.saved}/>
          </div>
=======
>>>>>>> Able to bring five pics from original pics

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
                <img src={guessAndUrls.urls[1]} />
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



const handleDropRejected = (...args) => console.log('reject', args)

 const onFileUploaded = (...args) => {
    console.log('inside onFileUploaded', args)
  }

class ImageUpload extends Component {
  constructor(props) {
    super(props)

    this.state = { preview: null }
    this.handleDrop = this.handleDrop.bind(this)
  }




  handleDrop([{ preview }]) {
    console.log('preview', preview)
    this.setState({ preview })
  }

  render() {
    const { preview } = this.state

    return (

      <section>
        <Dropzone onDrop={ this.handleDrop } accept="image/jpeg,image/jpg,image/tiff,image/gif" multiple={ false } onDropRejected={ handleDropRejected } >
          Drag a file here or click to upload.
        </Dropzone>
        { preview &&
        <img src={ preview } alt="image preview" />
        }
      </section>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

