import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleUser = () => setUser({});

  return (
    <>
      <h1>About Screen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-warning mt-1" onClick={handleUser}>
        Logout
      </button>
    </>
  );
};
