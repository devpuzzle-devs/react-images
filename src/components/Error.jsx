import React from 'react';
import { useSelector } from 'react-redux';

const Error = () => {
  const errors = useSelector(state => state.loading.error)
  return (
    <>
      {errors &&
        <div></div>}
    </>
  );
}

export default Error;
