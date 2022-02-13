import React, { useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

import "./reducer.css";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);

    reset();
  };

  return (
    <>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p
                  onClick={() => handleToggle(todo.id)}
                  className={`${todo.done && "complete"}`}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <form onSubmit={handleSubmit} className="d-grid gap-2">
            <input
              type="text"
              name="description"
              placeholder="Write..."
              autoComplete="off"
              className="form-control"
              value={description}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-sm btn-block"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
