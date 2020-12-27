import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const ImageFull = () => {
  const image = useSelector(state => state.data.image[0])
  const history = useHistory()
  
  return (
    <div >
      <button onClick={() => history.push("/")}>Back</button>
      { image && <img style={{ width: image.width, height: image.height }} src={image.urls.full} />}
    </div>
  );
}

export default ImageFull;
