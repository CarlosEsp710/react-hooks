import React from "react";
import { shallow } from "enzyme";

import { TodoList } from "../../../components/useReducer/TodoList";
import { todos } from "../../fixtures/todos";

describe("test <TodoList />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={todos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("should return component <TodoList />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should return <TodoListList /> list", () => {
    const TodoListItem = wrapper.find("TodoListItem");

    expect(TodoListItem.length).toBe(todos.length);
    expect(TodoListItem.at(0).prop("todo")).toEqual(expect.any(Object));
    expect(TodoListItem.at(0).prop("index")).toEqual(expect.any(Number));
    expect(TodoListItem.at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
    expect(TodoListItem.at(0).prop("handleToggle")).toEqual(
      expect.any(Function)
    );
  });
});
