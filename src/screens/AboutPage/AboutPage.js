import React from "react";

import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import { Container } from "../../components/Layout/Layout-styles";

class AboutPage extends React.Component {
  componentDidMount() {
    document.title = "About Us";
  }

  render() {
    return (
      <div className="About">
        <Header></Header>
        <Container>
          <About />
        </Container>
      </div>
    );
  }
}

export default AboutPage;
