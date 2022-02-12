import React, { useMemo, useState } from "react";

import { hardProcess } from "../../helpers/hardProcess";
import { useCounter } from "../../hooks/useCounter";

import "./memos.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);

  const [show, setShow] = useState(true);

  const handleChange = () => setShow(!show);

  const memoHardProcess = useMemo(() => hardProcess(counter), [counter]);

  return (
    <>
      <h1>MemoHook</h1>
      <hr />
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <p>{memoHardProcess}</p>
      <button className="btn btn-primary" onClick={increment}>
        + 1
      </button>
      <button className="btn btn-outline-primary ms-3" onClick={handleChange}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
