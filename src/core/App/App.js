import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Detail from '../Detail/Detail';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/recipe/:id" component={Detail} />
      </Switch>
    );
  }
}

export default App;
