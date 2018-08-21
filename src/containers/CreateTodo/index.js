import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";

import {
  createTodoPending,
  changeCreateTodoInput
} from "../../actions/pageActions";

class CreateTodo extends Component {
  render() {
    return (
      <div className="create-todo">
        <Input
          type="text"
          value={this.props.inputValue}
          changeHandler={e => this.props.changeCreateTodoInput(e.target.value)}
        />
        <Button
          className="add"
          text="Add"
          clickHandler={this.props.createTodoPending}
        />
      </div>
    );
  }
}

export default connect(
  ({ createTodoInput: { inputValue } }) => ({ inputValue }),
  { createTodoPending, changeCreateTodoInput }
)(CreateTodo);
