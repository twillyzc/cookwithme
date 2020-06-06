import React from "react";
import Recipes from "../../components/Recipes/Recipes";
import Header from "../../components/Header/Header";

class Main extends React.Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <div className="Recipes">
        <Header></Header>
        <main>
          <Recipes></Recipes>
        </main>
      </div>
    );
  }
}

export default Main;
