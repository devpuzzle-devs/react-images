import React from 'react';

const ImageFull = ({ image }) => {
  return (
    <div >
      <img style={{ width: image.width, height: image.height }} src={image.urls.full} />
    </div>
  );
}

export default ImageFull;
