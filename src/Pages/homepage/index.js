import React from "react";
import "./style.css";
import PageLayout from "../../Components/layout";
import HomeSlider from "../../Components/Home/home-slider";

import Bookcards from "../../Components/Home/home-book-card";

class Home extends React.Component {
  render() {
    return (
      <PageLayout className="home">
        <HomeSlider />
        <h3 id="headStyle">Papular Books</h3>
        <Bookcards />
      </PageLayout>
    );
  }
}

export default Home;
