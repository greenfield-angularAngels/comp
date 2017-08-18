import React from 'react';

var Image = ({image, saveImage}) => (
  <div className="txn-row">
      <div className="txn-data">{image}</div>
      <button onClick={saveImage(image)}>Save</button>
  </div>
);

export default Image;