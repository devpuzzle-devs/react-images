import React from 'react';

const Image = ({ image }) => {
  return (
    <tr key={image.id}>
      <td><img src={image.urls.regular} alt="" /></td>
      <td>{image.user.name}</td>
      <td>{image.user.first_name}</td>
      <td>{image.user.last_name}</td>
      <td>{image.user.last_name}</td>
    </tr>
  );
}

export default Image;
