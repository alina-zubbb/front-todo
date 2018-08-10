import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";

import { signup } from "../../actions/loginActions";

class Signup extends Component {
  state = {
    inputName: "",
    inputPassword: ""
  };

  inputNameChange = e => {
    this.setState({
      inputName: e.target.value
    });
  };

  inputPasswordChange = e => {
    this.setState({
      inputPassword: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = {
      username: this.state.inputName,
      password: this.state.inputPassword
    };
    this.props.signup(data);
  };

  render() {
    return (
      <form className="auth-form" id="signup" onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <Input
          type="text"
          value={this.state.inputName}
          placeholder="name"
          changeHandler={this.inputNameChange}
          isRequired="true"
        />
        <Input
          type="password"
          value={this.state.inputPassword}
          placeholder="password"
          changeHandler={this.inputPasswordChange}
          isRequired="true"
        />

        <Button className="add" text="sign up" type="submit" />
      </form>
    );
  }
}

export default connect(
  null,
  { signup }
)(Signup);
