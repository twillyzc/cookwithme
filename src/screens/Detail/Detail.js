import React from "react";

import Recipe from "../../components/Recipe/Recipe";
import Header from "../../components/Header/Header";

class Detail extends React.Component {
  render() {
    return (
      <div className="Detail">
        <Header></Header>
        <Recipe></Recipe>
      </div>
    );
  }
}

export default Detail;
