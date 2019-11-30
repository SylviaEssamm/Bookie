import React, { Component } from "react";
import { List } from "antd";
import Book1 from "../../Images/img-book1.jpg";
import Book2 from "../../Images/img-book2.jpg";
import Book3 from "../../Images/img-book3.jpg";
import Book4 from "../../Images/img-book4.jpg";
import BookCard from "./bookCard";

const data = [
  {
    cover: Book1,
    title: "Lyrics of the Lalala Musical",
    authorName: "Saifudin A.",
    price: "$2.00"
  },
  {
    cover: Book2,
    title: "Humans of New Yourk: stories",
    authorName: "Saifudin A.",
    price: "$35.00"
  },
  {
    cover: Book3,
    title: "The Dead Compendium Volume3",
    authorName: "Brain O'Well",
    price: "$9.00"
  },
  {
    cover: Book4,
    title: "The Dead Compendium Volume3",
    authorName: "Brain O'Well",
    price: "$3.00"
  },
  {
    cover: Book1,
    title: "Lyrics of the Lalala Musical",
    authorName: "Saifudin A.",
    price: "$2.00"
  },
  {
    cover: Book4,
    title: "The Dead Compendium Volume3",
    authorName: "Brain O'Well",
    price: "$3.00"
  }
];

export default class Recommended extends Component {
  render() {
    return (
      <div style={{ marginTop: 40 }}>
        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 6 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <BookCard
                cover={item.cover}
                title={item.title}
                authorName={item.authorName}
                price={item.price}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
