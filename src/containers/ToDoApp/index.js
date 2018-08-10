import React, { Component } from 'react';
import CreateTodo from '../CreateTodo/';
import ListTodo from '../ListTodo/';

class ToDoApp extends Component {

  render() {
    return (
      <div className="todo-app">
        <CreateTodo />
        <ListTodo />
      </div>
    );
  }
}

export default ToDoApp;
