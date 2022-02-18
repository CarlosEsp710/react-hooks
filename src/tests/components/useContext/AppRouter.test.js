import React from "react";
import { mount } from "enzyme";

import { AppRouter } from "../../../components/useContext/AppRouter";
import { UserContext } from "../../../components/useContext/UserContext";

describe("test <AppRouter />", () => {
  const user = {
    id: 123,
    name: "John",
    email: "john@example.com",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("should return component <AppRouter />", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
