import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { loginPending } from "../../actions/loginActions";

class Login extends Component {
  render() {
    return (
      <div>
        {this.props.errorMessage ? this.props.errorMessage : ""}
        <LoginForm onSubmit={this.props.loginPending} />
      </div>
    );
  }
}

export default connect(
  ({ loginState }) => ({ errorMessage: loginState.error }),
  { loginPending }
)(Login);
