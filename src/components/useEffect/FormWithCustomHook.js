import React, { useEffect } from "react";

import { useForm } from "../../hooks/useForm";

import "./effects.css";

export const FormWithCustomHook = () => {
  const [form, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = form;

  useEffect(() => console.log("email cambió"), [email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with custom hook</h1>
      <hr />
      <div className="form-group mb-2">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mb-2">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mb-2">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Tu contraseña"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
