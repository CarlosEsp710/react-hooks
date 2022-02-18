import React from "react";
import { mount } from "enzyme";

import { LoginScreen } from "../../../components/useContext/LoginScreen";
import { UserContext } from "../../../components/useContext/UserContext";

describe("test <LoginScreen />", () => {
  const user = {
    id: 123,
    name: "Carlos Espejel",
    email: "carlosespejel71@gmail.com",
  };

  const handleUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser: handleUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("should return component <LoginScreen />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should set the user", () => {
    wrapper.find("button").simulate("click");

    expect(handleUser).toHaveBeenCalledTimes(1);
    expect(handleUser).toHaveBeenCalledWith(user);
  });
});
