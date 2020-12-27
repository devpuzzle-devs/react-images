import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import { useSelector } from 'react-redux';

const Loader = () => {
  const load = useSelector(state => state.loading.load)
  return (

    <div className="loader">
      <PacmanLoader
        size={50}
        color={"#40E0D0"}
        loading={load}
      />

    </div>
  );
}

export default Loader;
