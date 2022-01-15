import React, { Component } from "react";
import Banner from "../../component/banner/index";
import Details from './../../component/details/index';

class HomePage extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <Banner />
        <Details />
      </div>
    );
  }
}

export default HomePage;
