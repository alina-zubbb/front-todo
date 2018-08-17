import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { history, store } from "../../store/configureStore";

import "../../index.css";

import Routes from "../Routes";

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
