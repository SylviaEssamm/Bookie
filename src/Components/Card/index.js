import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./style.css";

const { Meta } = Card;

export default class SingleCard extends Component {
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
          <div>
            <Meta title={title} className="titleStyle" />
            <span className="authorStyle">{authorName}</span>
            <p className="priceStyle">{price}</p>
            <div className="detailsButton">
              <div id="details">
                <a href="#" className="detailsLink">
                  details
                </a>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }
}
