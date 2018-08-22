import React, { Component } from "react";
import { connect } from "react-redux";

import SignupForm from "./SignupForm";
import { signUpPending } from "../../actions/loginActions";

class Signup extends Component {
  render() {
    return <SignupForm onSubmit={this.props.signUpPending} />;
  }
}

export default connect(
  null,
  {
    signUpPending
  }
)(Signup);
