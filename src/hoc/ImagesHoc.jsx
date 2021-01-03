import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import ImagesList from '../components/ImagesList';
import { actionImagesList } from '../redux/actions/actions'
import { useSelector } from 'react-redux';

const ImagesHoc = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionImagesList())
  },[]);

  const imagesList = useSelector(state => state.data.imagesList)

  return (
    <div>
      <ImagesList listOfImages={imagesList} />
    </div>
  );
}

export default ImagesHoc
