import React from "react";
import { shallow } from "enzyme";

import { TodoListItem } from "../../../components/useReducer/TodoListItem";
import { todos } from "../../fixtures/todos";

describe("test <TodoListItem />", () => {
  const todo = todos[0];

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={todo}
      index={todo.id}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("should return component <TodoListItem/>", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call the function handleDelete", () => {
    wrapper.find("button").simulate("click");

    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(todo.id);
  });

  test("should call the function handleToggle", () => {
    wrapper.find("p").simulate("click");

    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle).toHaveBeenCalledWith(todo.id);
  });

  test("should show todo description", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(`${todo.id + 1}. ${todo.desc}`);
  });

  test("should have className 'complete' if todo.done is true", () => {
    const doneTodo = {
      id: 3,
      desc: "Aprender Laravel",
      done: true,
    };

    const component = shallow(
      <TodoListItem
        todo={doneTodo}
        index={doneTodo.id}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );

    const p = component.find("p");

    expect(p.hasClass("complete")).toBe(true);
  });
});
