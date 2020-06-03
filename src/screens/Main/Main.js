import React from "react";

import Search from "../../components/Search/Search";
import Recipes from "../../components/Recipes/Recipes";
import Header from "../../components/Header/Header";

class Main extends React.Component {
  render() {
    return (
      <div className="Recipes">
        <Header></Header>
        <main>
          <Search></Search>
          <Recipes></Recipes>
        </main>
      </div>
    );
  }
}

export default Main;
