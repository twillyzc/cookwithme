import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./core/App/App";
import { Provider } from "react-redux";
import { store } from "./store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StylesProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
