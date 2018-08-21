import React, { Component } from "react";
import ItemTodo from "../ItemTodo";
import Button from "../../components/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  sortFromNew,
  sortFromOld,
  sortFromHour,
  getAllTodoPending
} from "../../actions/pageActions";

class ListTodo extends Component {
  componentDidMount() {
    this.props.getAllTodoPending();
  }

  render() {
    return (
      <div>
        <div>
          <h2>Show todos by: </h2>
          <Button
            text="New"
            className="filtersBtn"
            clickHandler={this.props.sortFromNew}
          />
          <Button
            text="Old"
            className="filtersBtn"
            clickHandler={this.props.sortFromOld}
          />
          <Button
            text="Hour"
            className="filtersBtn"
            clickHandler={this.props.sortFromHour}
          />
        </div>
        <ul className="todo-list">
          {this.props.list.map(item => {
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
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default connect(
  ({ listState }) => ({ list: listState.list }),
  { getAllTodoPending, sortFromNew, sortFromOld, sortFromHour }
)(ListTodo);
