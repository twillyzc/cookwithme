import React from "react";
import Recipes from "../../components/Recipes/Recipes";
import Header from "../../components/Header/Header";
import { Container } from "../../components/Layout/Layout-styles";
import { Helmet } from "react-helmet";

class Main extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        <main>
          <Container>
            <Recipes />
          </Container>
        </main>
      </>
    );
  }
}

export default Main;
