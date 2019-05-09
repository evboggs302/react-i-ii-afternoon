import React, { Component } from "react";
import "./Comp2.css";

export default class Comp2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="buttonsContainer" t>
        <div className="previous">
          <button
            className="pb"
            onClick={() => {
              this.props.previ();
            }}
          >
            {"<"} Previous
          </button>
        </div>
        <div className="mids">
          <div className="mb">
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
          </div>
        </div>
        <div className="next">
          <button
            className="nb"
            onClick={() => {
              this.props.next();
            }}
          >
            Next {">"}
          </button>
        </div>
      </div>
    );
  }
}
