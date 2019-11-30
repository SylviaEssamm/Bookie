import React, { Component } from "react";
import "./content.css";
import { Box } from "../../../../styles/theme";

export default class SlideContent extends Component {
  render() {
    const { header, subHeader } = this.props;
    return (
      <Box id="contentStyle">
        <p id="subHeader">{subHeader}</p>
        <h1 id="header">{header}</h1>
        <a href="#" id="seeMoreButton">
          See More
        </a>
      </Box>
    );
  }
}
