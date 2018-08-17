import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { store } from "../../store/configureStore";

import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  updateTodoPending,
  deleteTodoPending
} from "../../actions/pageActions";

class ItemTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: props.text,
      doneValue: false,
      edit: false
    };
  }

  delete = () => {
    if (process.env.NODE_ENV === "development") {
      console.log("delete");
    }
    store.dispatch(
      deleteTodoPending(window.localStorage.getItem("token"), this.props.itemId)
    );
  };

  update = e => {
    this.setState({
      edit: false
    });
    store.dispatch(
      updateTodoPending(
        window.localStorage.getItem("token"),
        this.props.itemId,
        this.state.textInputValue
      )
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
              <Button
                className="update"
                text="update"
                clickHandler={this.update}
              />
            </span>
          ) : (
            <span>
              <span className="item-text" onClick={this.editHandler}>
                {this.props.text}
              </span>
              <Button
                className="delete"
                text="delete"
                clickHandler={this.delete}
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
  { updateTodoPending, deleteTodoPending }
)(ItemTodo);
