import React from "react";
import { Route } from "react-router";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return isLogin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      );
    }}
  />
);

export default compose(
  withRouter,
  connect(({ loginState }) => ({
    isLogin: loginState.authenticated
  }))
)(PrivateRoute);
