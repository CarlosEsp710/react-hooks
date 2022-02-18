import React from "react";
import { mount } from "enzyme";

import { HomeScreen } from "../../../components/useContext/HomeScreen";
import { UserContext } from "../../../components/useContext/UserContext";

describe("test <HomeScreen />", () => {
  const user = {
    name: "John",
    email: "john@example.com",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test("should return component <HomeScreen />", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
