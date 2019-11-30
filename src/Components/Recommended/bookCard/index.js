import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Rate } from "antd";
import "./style.css";

const { Meta } = Card;

export default class BookCard extends Component {
  render() {
    const { cover, title, authorName, price } = this.props;
    return (
      <Link
        to={{
          pathname: `/detailspage/${title}`,
          query: {
            cover: { cover },
            title: { title },
            authorName: { authorName },
            price: { price }
          }
        }}
      >
        <Card hoverable cover={<img alt="#" src={cover} />}>
          <div style={{ overflow: "hidden" }}>
            <Meta title={title} className="titleStyler" />
            <span className="authorStyler">{authorName}</span>
            <Rate
              disabled
              defaultValue={5}
              style={{ color: "red", float: "left" }}
            />
            <p className="priceStyler">{price}</p>
          </div>
        </Card>
      </Link>
    );
  }
}
