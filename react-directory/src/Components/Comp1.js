import React, { Component } from "react";
import Comp2 from "./Comp2";

export default class Comp1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Comp2 />
      </div>
    );
  }
}
