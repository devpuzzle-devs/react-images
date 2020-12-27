import React, { Component } from 'react';
import ImagesHoc from './hoc/ImagesHoc';
import ImageFull from './components/ImageFull';
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={ImagesHoc} />
          <Route path="/image" component={ImageFull} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

