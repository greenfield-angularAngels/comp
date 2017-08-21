import React from 'react';
import Saved from './Saved.jsx';


// TODO: We need to get this collection from Mongoose
const PictureCollection = 'TODO'




const SavedList = (props) => (
  <div className="category-list">
    {
      props.saved.map( (url, index) => {
        return (
          <image url={url} key={index}/>
        )
      })
    }
  </div>
);

export default SavedList;