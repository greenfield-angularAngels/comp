import React from 'react';

var Image = ({image, saveImage}) => (
  <div className="txn-row">
      <div className="txn-data">{image.url}</div>
      <button onClick={saveImage(image)}>+ Add to Saved</button>
  </div>
);

export default Image;