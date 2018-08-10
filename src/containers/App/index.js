import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { history, store } from "../../store/configureStore";

import "../../index.css";

import { getUserData } from "../../actions/loginActions";
import Routes from "../Routes";

const token = window.localStorage.getItem("token");
if (token) {
  store.dispatch(getUserData(token));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;