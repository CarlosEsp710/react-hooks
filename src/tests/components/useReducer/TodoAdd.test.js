import React from "react";
import { shallow } from "enzyme";

import { TodoAdd } from "../../../components/useReducer/TodoAdd";

describe("test <TodoAdd />", () => {
  const handleAdd = jest.fn();

  const wrapper = shallow(<TodoAdd handleAdd={handleAdd} />);

  test("should return component <TodoAdd />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should not call handleAdd if value is empty", () => {
    wrapper.find("button").simulate("submit", { preventDefault() {} });

    expect(handleAdd).not.toHaveBeenCalled();
  });

  test("should call handleAdd if value is not empty", () => {
    const value = "Aprender Java";

    const input = wrapper
      .find("input")
      .simulate("change", { target: { value, name: "description" } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAdd).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(input.prop("value")).toBe("");
  });
});
