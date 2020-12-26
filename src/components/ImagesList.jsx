import React from 'react';
import Image from './Image';
import ImageFull from './ImageFull';

const ImagesList = ({ listOfImages }) => {
  return (
    <div>
      <table className="table  table-striped table-dark">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {listOfImages.map((item) => {
            return (<Image key={item.id} image={item} />)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ImagesList;
