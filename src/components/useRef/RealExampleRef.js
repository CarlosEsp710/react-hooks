import React, { useState } from "react";

import { MultipleCustomHooks } from "../examples/MultipleCustomHooks";

import "./ref.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  const handleChange = () => setShow(!show);

  return (
    <>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button className="btn btn-outline-primary mt-5" onClick={handleChange}>
        Show/Hide
      </button>
    </>
  );
};
