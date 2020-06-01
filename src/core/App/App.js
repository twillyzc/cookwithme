import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    );
  }
}

export default App;
