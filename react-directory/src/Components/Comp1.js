import React, { Component } from "react";
import "./Comp1.css";

export default class Comp1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="main">
        <div className="infoContainer">
          <h1 className="currentIndex">{this.props.info.id}/ 25</h1>
          <div className="fullName">
            {this.props.info.name.first} {this.props.info.name.last}
          </div>
          <br />
          <br />
          <div className="line1">
            <div className="from">From: </div>
            <div>
              {this.props.info.city}, {this.props.info.country}
            </div>
          </div>
          <br />
          <div className="line2">
            <div className="job">Job Title: </div>
            <div>{this.props.info.title}</div>
          </div>
          <br />
          <div className="line3">
            <div className="employer">Employer: </div>
            <div> {this.props.info.employer}</div>
          </div>
          <br />
          <br />
          <br />
          <div className="movies"> Favorite Movies:</div>
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
