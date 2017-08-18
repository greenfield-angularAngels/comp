import React from 'react';
import Image from './Image.jsx';

const ImageList = ( {state, list, saveImage} ) => (
  <div className="txn">
      <h3>Results</h3> 
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Image</div>
        </div>
      </div>
      {
        list.urls.map( (image, index) => {
          return (
            <Image 
              image={image} 
              saveImage={saveImage}
              key={index}
            />
          )
        })
      }
  </div>
);

export default ImageList;