import React from "react";
import { shallow, mount } from "enzyme";
import { act } from "@testing-library/react";

import { TodoApp } from "../../../components/useReducer/TodoApp";
import { todos } from "../../fixtures/todos";

describe("test <TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test("should return component <TodoApp />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should add todo", () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("handleAdd")(todos[0]);
      wrapper.find("TodoAdd").prop("handleAdd")(todos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("should delete todo", () => {
    wrapper.find("TodoAdd").prop("handleAdd")(todos[0]);
    wrapper.find("TodoList").prop("handleDelete")(todos[0].id);

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp (0)");
  });
});
