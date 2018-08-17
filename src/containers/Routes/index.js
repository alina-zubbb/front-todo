import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { store } from "../../store/configureStore";
import { getUserDataPending, signout } from "../../actions/loginActions";
import Button from "../../components/Button";
import PrivateRoute from "../PrivateRoute";
import Login from "../Login/";
import Signup from "../Signup";
import ToDoApp from "../ToDoApp";
import Posts from "../Posts";
import Profile from "../Profile";

const token = window.localStorage.getItem("token");
if (token) {
  store.dispatch(getUserDataPending(token));
}

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
              <Link to="/posts">Posts</Link>
              <Link to="/profile">Profile</Link>
              <Button
                className="delete"
                text="Logout"
                clickHandler={this.signoutHandler}
              />
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signUp">Signup</Link>
            </div>
          )}
        </div>

        <Route exact path="/" component={Start} />
        <PrivateRoute path="/protected" component={ToDoApp} />
        <Route path="/signUp" component={Signup} />
        <Route path="/posts" component={Posts} />
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
    { getUserDataPending, signout }
  )
)(Routes);
