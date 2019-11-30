import React, { Component } from "react";
import { Layout } from "antd";
import { Link, withRouter } from "react-router-dom";
import { Box } from "../../styles/theme";
import LeftMenu from "./leftmenu";
import "./layout.css";

const { Header, Content } = Layout;

/* var prevScrollpos = window.pageYOffset; */

class PageLayout extends Component {
  state = { visible: false, top: 0 };

  /* showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  }; */

  /* componentDidMount(){
    window.onscroll = ev => {
      var currentScrollPos = window.pageYOffset;

      let scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
      if (scrollTop > 64) {
        if (prevScrollpos > currentScrollPos) {
          this.setState({
            top: 0
          })
        }else{
          this.setState({
            top: -64
          })
        }
      }
      prevScrollpos = currentScrollPos;

    }
  } */

  render() {
    const { children } = this.props;
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="header">
              <div className="logo">Bookie</div>
              <div className="left-menu">
                <LeftMenu {...this.props} />
              </div>
            </div>
          </Header>
          <Content className="mainStyle">{children}</Content>
        </Layout>
      </div>
    );
  }
}

export default withRouter(PageLayout);
