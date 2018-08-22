import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { loginPending } from "../../actions/loginActions";

class Login extends Component {
  render() {
    return <LoginForm onSubmit={this.props.loginPending} />;
  }
}

export default connect(
  null,
  { loginPending }
)(Login);
