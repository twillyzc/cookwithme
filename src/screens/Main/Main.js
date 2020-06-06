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
      <div className="Recipes">
        <Header></Header>
        <main>
          <Container>
            <Recipes />
          </Container>
        </main>
      </div>
    );
  }
}

export default Main;
