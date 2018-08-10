import React, { Component } from "react";
import ItemTodo from "../ItemTodo";
import Button from "../../components/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  sortFromNew,
  sortFromOld,
  sortFromHour,
  getAllTodo
} from "../../actions/pageActions";

class ListTodo extends Component {
  state = {
    token: window.localStorage.getItem("token")
  };

  sortOld = () => {
    this.props.sortFromOld();
  };

  sortNew = () => {
    this.props.sortFromNew();
  };

  sortHour = () => {
    this.props.sortFromHour();
  };

  componentDidMount() {
    this.props.getAllTodo(this.state.token);
  }

  render() {
    return (
      <div>
        <div>
          <h2>Show todos by: </h2>
          <Button
            text="New"
            className="filtersBtn"
            clickHandler={this.sortNew}
          />
          <Button
            text="Old"
            className="filtersBtn"
            clickHandler={this.sortOld}
          />
          <Button
            text="Hour"
            className="filtersBtn"
            clickHandler={this.sortHour}
          />
        </div>
        <ul className="todo-list">
          {this.props.list.map(item => {
            console.log(item);
            return (
              <ItemTodo key={item._id} itemId={item._id} text={item.text} />
            );
          })}
        </ul>
      </div>
    );
  }
}

ListTodo.propTypes = {
  store: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  )
};

export default connect(
  ({ listState }) => ({ list: listState.list }),
  { sortFromNew, sortFromOld, sortFromHour, getAllTodo }
)(ListTodo);
