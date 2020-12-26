import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import ImagesList from '../components/ImagesList';
import { actionCreatorImagesList } from '../redux/actions/actionsCreator'

const ImagesHoc = () => {

  const [images, setImages] = useState([]);
  const dispatch = useDispatch()
  useEffect(async () => {
    let link = "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0 "

    try {
      let response = await fetch(link)
      let data = await response.json()
      setImages(data)
      dispatch(actionCreatorImagesList(data))
      
    } catch (error) {
      console.log("error", error)
    }

  }, []);

  return (
    <div>
      <ImagesList listOfImages={images} />
    </div>
  );
}



export default ImagesHoc
