import React from "react";

import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length <= 2) {
      return;
    }

    handleAdd({
      id: new Date().getTime(),
      desc: description,
      done: false,
    });

    reset();
  };

  return (
    <>
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
    </>
  );
};
