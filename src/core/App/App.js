import React from 'react';
import { connect } from 'react-redux';
import { getDataRequest } from '../../store/actions/repiceActions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.recipes.items.map((el, i) => {
          return <h1 key={i}>{el.title}</h1>;
        })}
        <button onClick={() => this.props.getDataRequest()}>CLick to Add POst</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('App State ->', state);
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getDataRequest })(App);
