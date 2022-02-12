import React, { useCallback, useState } from "react";

import { ShowIncrement } from "./ShowIncrement";

import "./memos.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => setCounter((c) => c + 1), [setCounter]);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
