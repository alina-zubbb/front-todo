import React, { Component } from "react";
import { connect } from "react-redux";

import { store } from "../../store/configureStore";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { loginPending } from "../../actions/loginActions";

class Login extends Component {
  state = {
    inputName: "",
    inputPassword: ""
  };

  inputNameChange = e => {
    this.setState({
      inputName: e.target.value
    });
  };

  inputInputPassword = e => {
    this.setState({
      inputPassword: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.inputName,
      password: this.state.inputPassword
    };
    store.dispatch(loginPending(data));
  };

  render() {
    return (
      <div>
        <form className="auth-form" id="login" onSubmit={this.handleSubmit}>
          <h1>LogIn</h1>
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
            changeHandler={this.inputInputPassword}
            isRequired="true"
          />
          <Button className="add" text="login" type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { loginPending }
)(Login);
