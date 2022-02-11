import React, { useEffect, useState } from "react";

import { Message } from "./Message";

import "./effects.css";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const { name, email } = form;

  useEffect(() => {
    //console.log("Componente cambió");
  }, []);

  useEffect(() => {
    //console.log("Form cambió");
  }, [form]);

  useEffect(() => {
    //console.log("Email cambió");
  }, [email]);

  const handleInputChange = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  return (
    <>
      <h1>useEffect</h1>
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
      {name === "123" && <Message />}
    </>
  );
};
