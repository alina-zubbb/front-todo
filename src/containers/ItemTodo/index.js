import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";
import { saveTodo, removeTodo } from "../../actions/pageActions";
import PropTypes from "prop-types";

class ItemTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: props.text,
      doneValue: false,
      edit: false
    };
  }

  remove = () => {
    this.props.removeTodo(
      this.props.itemId,
      window.localStorage.getItem("token")
    );
  };

  save = e => {
    this.setState({
      edit: false
    });
    this.props.saveTodo(
      this.props.itemId,
      this.state.textInputValue,
      window.localStorage.getItem("token")
    );
  };

  editHandler = e => {
    this.setState({
      edit: true
    });
  };

  textChangeHandler = e => {
    this.setState({
      textInputValue: e.target.value
    });
  };

  doneChangeHandler = e => {
    this.setState({
      doneValue: !this.state.doneValue
    });
  };

  render() {
    console.log("this.props.itemId", this.props.itemId);
    return (
      <div>
        <li className="item-todo">
          <Input type="checkbox" changeHandler={this.doneChangeHandler} />
          {this.state.edit ? (
            <span>
              <Input
                value={this.state.textInputValue}
                changeHandler={this.textChangeHandler}
                autoFocus={true}
                className="input-text"
                type="text"
              />
              <Button className="save" text="save" clickHandler={this.save} />
            </span>
          ) : (
            <span>
              <span className="item-text" onClick={this.editHandler}>
                {this.props.text}
              </span>
              <Button
                className="remove"
                text="remove"
                clickHandler={this.remove}
              />
            </span>
          )}
        </li>
      </div>
    );
  }
}

ItemTodo.propTypes = {
  itemId: PropTypes.string,
  text: PropTypes.string
};

export default connect(
  null,
  { saveTodo, removeTodo }
)(ItemTodo);
