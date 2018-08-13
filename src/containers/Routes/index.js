import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { getUserData, signout } from "../../actions/loginActions";
import Button from "../../components/Button";
import PrivateRoute from "../PrivateRoute";
import Login from "../Login/";
import Signup from "../Signup";
import ToDoApp from "../ToDoApp";
import Page1 from "../Page1";
import Profile from "../Profile";

class Routes extends Component {
  state = {
    status: false
  };

  signoutHandler = () => {
    localStorage.removeItem("token");
    this.props.signout();
  };

  render() {
    if (this.props.isPending) {
      return <div>loading...</div>;
    }

    return (
      <div className="app">
        <div className="avatar">
          <img
            src={this.props.imageLink || "http://place-hold.it/100"}
            alt=""
          />
        </div>
        <div className="name">{"" + this.props.username}</div>

        <div className="nav">
          {this.props.isLogin ? (
            <div>
              <Link to="/protected">Todo App</Link>
              <Link to="/profile">Profile</Link>
              <Button
                className="remove"
                text="Logout"
                clickHandler={this.signoutHandler}
              />
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </div>

        <Route exact path="/" component={Start} />
        <PrivateRoute path="/protected" component={ToDoApp} />
        <Route path="/signup" component={Signup} />
        <Route path="/page1" component={Page1} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

const Start = () => <h3>Start Page</h3>;

export default compose(
  withRouter,
  connect(
    ({ loginState }) => ({
      isLogin: loginState.authenticated,
      isPending: loginState.pending,
      isError: loginState.error,
      username: loginState.username,
      userId: loginState.userId,
      imageLink: loginState.imageLink
    }),
    { getUserData, signout }
  )
)(Routes);
