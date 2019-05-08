import React, { Component } from "react";

import Comp1 from "./Components/Comp1";

import data from "./data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div>
        <Comp1 info={this.state.data} />
      </div>
    );
  }
}
