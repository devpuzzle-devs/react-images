import React from 'react';
import { actionCreatorImage } from '../redux/actions/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

const Image = ({ image }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onClickImage =  () => {
    dispatch(actionCreatorImage(image.id))
    history.push("/image")
  }

  return (
    <tr key={image.id}>
      <td>
        <img
          src={image.urls.small}
          alt=""
          className='imgSmall'
          onClick={onClickImage} />
      </td>
      <td>{image.user.name}</td>
      <td>{image.user.first_name}</td>
      <td>{image.user.last_name}</td>
    </tr>
  );
}

export default Image;
