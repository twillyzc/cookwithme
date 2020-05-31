import React from 'react';
import './App.css';
import Search from '../../components/Search/Search';
import RecipeList from '../../components/RecipesList/RecipeList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Search></Search>
        <RecipeList></RecipeList>
      </div>
    );
  }
}

export default App;
