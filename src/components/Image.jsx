import React from 'react';
import { actionCreatorImage } from '../redux/actions/actionsCreator'
import { useDispatch } from 'react-redux'

const Image = ({ image }) => {
  const dispatch = useDispatch()
  return (
    <tr key={image.id}>
      <td>
        <img 
        src={image.urls.small} 
        alt="" 
        className='imgSmall' 
        onClick={()=> dispatch(actionCreatorImage(image.id))}/>
        </td>
      <td>{image.user.name}</td>
      <td>{image.user.first_name}</td>
      <td>{image.user.last_name}</td>
      <td>{image.user.last_name}</td>
    </tr>
  );
}

export default Image;
