import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  loginPending,
  changeLoginInputUsername,
  changeLoginInputPassword
} from "../../actions/loginActions";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.loginPending();
  };

  render() {
    return (
      <div>
        <form className="auth-form" id="login" onSubmit={this.handleSubmit}>
          <h1>LogIn</h1>
          <Input
            type="text"
            value={this.props.username}
            placeholder="name"
            changeHandler={e =>
              this.props.changeLoginInputUsername(e.target.value)
            }
            isRequired="true"
          />
          <Input
            type="password"
            value={this.props.password}
            placeholder="password"
            changeHandler={e =>
              this.props.changeLoginInputPassword(e.target.value)
            }
            isRequired="true"
          />
          <Button className="add" text="login" type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  ({ loginInputValues: { username, password } }) => ({ username, password }),
  {
    loginPending,
    changeLoginInputUsername,
    changeLoginInputPassword
  }
)(Login);
