import React from "react";
import Recipes from "../../components/Recipes/Recipes";
import Header from "../../components/Header/Header";
import { Container } from "../../components/Layout/Layout-styles";

class Main extends React.Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <>
        <Header></Header>
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
