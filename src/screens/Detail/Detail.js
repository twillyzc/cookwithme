import React from "react";

import Recipe from "../../components/Recipe/Recipe";
import Header from "../../components/Header/Header";
import { Container } from "../../components/Layout/Layout-styles";
import { Helmet } from "react-helmet";

class Detail extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Recipe Detail</title>
        </Helmet>
        <Header />
        <Container>
          <Recipe />
        </Container>
      </>
    );
  }
}

export default Detail;
