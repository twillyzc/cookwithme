import React from 'react';

import Search from '../../components/Search/Search';
import Recipes from '../../components/Recipes/Recipes';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Search></Search>
        <Recipes></Recipes>
      </div>
    );
  }
}

export default Main;
