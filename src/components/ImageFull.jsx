import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const ImageFull = () => {
  const image = useSelector(state => state.data.image[0])
  const history = useHistory()
  
  return (
    <div >
      <button className="btn btn-info mb-2 mt-2" onClick={() => history.push("/")}>Back</button>
      { image && <img style={{ width: image.width, height: image.height }} src={image.urls.full} alt="" />}
    </div>
  );
}

export default ImageFull;
