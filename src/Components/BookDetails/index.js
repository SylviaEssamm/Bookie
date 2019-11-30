import React, { Component } from "react";
import "./bookdetails.css";
import { Row, Col, Rate } from "antd";

export default class BookDetails extends Component {
  render() {
    console.log(this.props.bookDetails);
    return (
      <React.Fragment>
        <div id="detailsSection">
          <Row>
            <Col span={6}>
              <img
                src={this.props.bookDetails.cover.cover}
                alt="/"
                style={{ width: 300, height: 410 }}
              />
            </Col>

            <Col span={14}>
              <div id="allAbout">
                <h2 style={{ marginBottom: 0 }}>
                  {this.props.bookDetails.title.title}
                </h2>
                <p>
                  by{" "}
                  <span style={{ color: "red" }}>
                    {this.props.bookDetails.authorName.authorName}
                  </span>
                </p>
                <Rate
                  disabled
                  defaultValue={5}
                  style={{ color: "red", marginBottom: 10 }}
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p style={{ fontWeight: "bold", fontSize: 24 }}>
                  {this.props.bookDetails.price.price}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
