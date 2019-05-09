import React, { Component } from "react";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import data from "./data";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      index: 0
    };
    this.nextContact = this.nextContact.bind(this);
    this.prevContact = this.prevContact.bind(this);
  }

  nextContact() {
    this.setState({
      index: (this.state.index += 1)
    });
  }

  prevContact() {
    this.setState({
      index: this.state.index - 1
    });
  }

  render() {
    return (
      <div>
        <header>Home</header>
        <body>
          <Comp1 info={this.state.data[this.state.index]} />
          <Comp2 next={this.nextContact} previ={this.prevContact} />
        </body>
      </div>
    );
  }
}
