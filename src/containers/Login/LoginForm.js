import React from "react";
import { Field, reduxForm } from "redux-form";

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="auth-form" id="login" onSubmit={handleSubmit}>
      <h1>LogIn</h1>
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

LoginForm = reduxForm({
  form: "login"
})(LoginForm);

export default LoginForm;
