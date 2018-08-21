import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";

import {
  signUpPending,
  changeSignUpInputUsername,
  changeSignUpInputPassword
} from "../../actions/loginActions";

class Signup extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUpPending();
  };

  render() {
    return (
      <form className="auth-form" id="signUp" onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <Input
          type="text"
          value={this.props.username}
          placeholder="name"
          changeHandler={e =>
            this.props.changeSignUpInputUsername(e.target.value)
          }
          isRequired="true"
        />
        <Input
          type="password"
          value={this.props.password}
          placeholder="password"
          changeHandler={e =>
            this.props.changeSignUpInputPassword(e.target.value)
          }
          isRequired="true"
        />

        <Button className="add" text="sign up" type="submit" />
      </form>
    );
  }
}

export default connect(
  ({ signUpInputValues: { username, password } }) => ({ username, password }),
  {
    signUpPending,
    changeSignUpInputUsername,
    changeSignUpInputPassword
  }
)(Signup);
