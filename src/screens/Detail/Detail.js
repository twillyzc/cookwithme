import React from "react";

import Recipe from "../../components/Recipe/Recipe";
import Header from "../../components/Header/Header";
import { Container } from "../../components/Layout/Layout-styles";

class Detail extends React.Component {
  componentDidMount() {
    document.title = "Recipe Detail";
  }

  render() {
    return (
      <div className="Detail">
        <Header />
        <Container>
          <Recipe />
        </Container>
      </div>
    );
  }
}

export default Detail;
