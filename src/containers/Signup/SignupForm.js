import React from "react";
import { Field, reduxForm } from "redux-form";

let SignupForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="auth-form" id="signup" onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <Field name="username" component="input" type="text" placeholder="name" />
      <Field
        name="password"
        component="input"
        type="password"
        placeholder="password"
      />
      <button className="add" type="submit">
        Submit
      </button>
    </form>
  );
};

SignupForm = reduxForm({
  form: "signup"
})(SignupForm);

export default SignupForm;
