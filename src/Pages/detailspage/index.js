import React, { Component } from "react";
import "./style.css";
import BookDetails from "../../Components/BookDetails";
import Recommended from "../../Components/Recommended";

export default class Details extends Component {
  render() {
    console.log("Data", this.props.location.query);
    return (
      <div id="detailsContainer">
        <h2 style={{ display: "flex" }}>We recommend</h2>
        <BookDetails bookDetails={this.props.location.query} />

        <Recommended />
      </div>
    );
  }
}
