import React from "react";
import CreateTodo from "../CreateTodo/";
import ListTodo from "../ListTodo/";

function ToDoApp() {
  return (
    <div className="todo-app">
      <CreateTodo />
      <ListTodo />
    </div>
  );
}

export default ToDoApp;
