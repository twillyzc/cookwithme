import React from "react";

import Header from "../../components/Header/Header";
import About from "../../components/About/About";

class AboutPage extends React.Component {
  componentDidMount() {
    document.title = "About Us";
  }

  render() {
    return (
      <div className="About">
        <Header></Header>
        <About></About>
      </div>
    );
  }
}

export default AboutPage;
