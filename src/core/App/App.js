import React from 'react';
import { connect } from 'react-redux';
import { getRecipesRequest } from '../../store/actions/repiceActions';
import './App.css';
import Search from '../../components/Search/Search';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Search></Search>
        <ul>
          {this.props.recipes.items.map((el, i) => {
            return <li key={i}>{el.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipesRequest })(App);
