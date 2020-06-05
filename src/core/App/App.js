import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "../../screens/Main/Main";
import Detail from "../../screens/Detail/Detail";
import AboutPage from "../../screens/AboutPage/AboutPage";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/recipe/:id" component={Detail} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    );
  }
}

export default App;
