import React, { Component } from 'react';
import ImagesHoc from './hoc/ImagesHoc';
import ImageFull from './components/ImageFull';
import Test from './components/Test';
import { BrowserRouter, Route } from "react-router-dom";
import Loader from './components/Loader';
import Error from './components/Error';
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Loader className="loader" />
          <Error />
          <Route exact path="/" component={ImagesHoc} />
          <Route path="/image" component={ImageFull} />
          <Route path="/test" component={Test} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

