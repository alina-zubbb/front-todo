import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/signUp">SignUp</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Nav;
