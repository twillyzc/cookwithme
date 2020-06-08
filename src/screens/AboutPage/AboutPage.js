import React from "react";

import About from "../../components/About/About";
import { Container } from "../../components/Layout/Layout-styles";
import { Helmet } from "react-helmet";

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Us</title>
        </Helmet>
        <Container>
          <About />
        </Container>
      </>
    );
  }
}

export default AboutPage;
