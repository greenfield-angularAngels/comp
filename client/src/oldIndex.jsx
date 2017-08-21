import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Dropzone from 'react-dropzone';

import data from './dummy_data.js';
import ImageList from './components/ImageList.jsx';
import SavedList from './components/SavedList.jsx';

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
      },
      error: function(err) {
        console.log('Client Err', err);
      }
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



  }


  render() {
    console.log('App Render Triggered')
    return (
      <div>
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

