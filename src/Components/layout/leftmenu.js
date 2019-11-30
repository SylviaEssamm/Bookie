import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default class LeftMenu extends Component {
  render() {
    // console.log("this.props.location.pathname]", this.props.location.pathname)
    return (
      <Menu
        style={{ color: "white", backgroundColor: "transparent" }}
        selectedKeys={[this.props.location.pathname]}
        mode="horizontal"
      >
        <Menu.Item key="01">
          <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Item key="02">
          <Link to="/">BOOKSTORE</Link>
        </Menu.Item>
        <Menu.Item key="03">
          <Link to="/">MYACCOUNT</Link>
        </Menu.Item>
        <Menu.Item key="04">
          <Link to="/">CONTACT</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
