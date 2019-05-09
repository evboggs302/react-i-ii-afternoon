import React, { Component } from "react";
// import "./App.css";

export default class Comp1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.info.id}/ 25</h1>
        <div>
          {this.props.info.name.first} {this.props.info.name.last}
        </div>
        <br />
        <section>
          <div>
            From: {this.props.info.city}, {this.props.info.country}
          </div>
          <div>Job: {this.props.info.title}</div>
          <div>Employer: {this.props.info.employer}</div>
        </section>
        <br />
        <div>
          {" "}
          Favorite Movies
          <ol>
            <li>{this.props.info.favoriteMovies[0]}</li>
            <li>{this.props.info.favoriteMovies[1]}</li>
            <li>{this.props.info.favoriteMovies[2]}</li>
          </ol>
        </div>
      </div>
    );
  }
}
