import React, { Component } from "react";
// import "./App.css";

export default class Comp2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.previ();
          }}
        >
          Previous
        </button>
        <section>
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
        </section>
        <button
          onClick={() => {
            this.props.next();
          }}
        >
          Next
        </button>
      </div>
    );
  }
}
