import React, { Component } from "react";
import "./Comp2.css";

export default class Comp2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          className="previous"
          onClick={() => {
            this.props.previ();
          }}
        >
          Previous
        </button>
        <section className="mids">
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
        </section>
        <button
          className="next"
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
