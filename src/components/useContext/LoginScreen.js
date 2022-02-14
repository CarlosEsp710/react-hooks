import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleUser = () =>
    setUser({
      id: 123,
      name: "Carlos Espejel",
      email: "carlosespejel71@gmail.com",
    });

  return (
    <>
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleUser}>
        Login
      </button>
    </>
  );
};
