import React, { useState } from "react";

import { Small } from "./Small";
import { useCounter } from "../../hooks/useCounter";

import "./memos.css";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  const handleChange = () => setShow(!show);

  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <h3>
        Counter: <Small value={counter} />
      </h3>
      <button className="btn btn-primary" onClick={increment}>
        + 1
      </button>
      <button className="btn btn-outline-primary ms-3" onClick={handleChange}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
