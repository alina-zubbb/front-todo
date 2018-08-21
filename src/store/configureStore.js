import { createStore, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/index";
import { rootSaga } from "../sagas";

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  routerMiddleware(history),
  sagaMiddleware
  // logger
];

const enhanclers = [applyMiddleware(...middlewares)];

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO: Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false
      })
    : compose;

export const store = createStore(rootReducer, composeEnhancers(...enhanclers));

sagaMiddleware.run(rootSaga);
