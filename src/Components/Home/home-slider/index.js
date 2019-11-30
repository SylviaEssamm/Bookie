import React, { Component } from "react";
import { Carousel } from "antd";
import "./slider.css";
import SlideContent from "./slide-content";

export default class HomeSlider extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Carousel effect="fade" autoplay>
          <div className="imageSlide1">
            <SlideContent
              subHeader="Reading is the best for get idea"
              header="Keep Reading"
            />
          </div>
          <div className="imageSlide2">
            <SlideContent
              subHeader="Writing to improve your imagination"
              header="Let's Writing"
            />
          </div>
          <div className="imageSlide3">
            <SlideContent
              subHeader="Reading is the best for get idea"
              header="Start Reading"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
