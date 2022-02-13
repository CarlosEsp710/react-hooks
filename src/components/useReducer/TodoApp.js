import React, { useEffect, useReducer } from "react";

import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

import { todoReducer } from "./todoReducer";

import "./reducer.css";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    dispatch({
      type: "add",
      payload: todo,
    });
  };

  const handleDelete = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggle = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };

  return (
    <>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </>
  );
};
