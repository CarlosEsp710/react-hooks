import { todoReducer } from "../../../components/useReducer/todoReducer";

import { todos } from "../../fixtures/todos";

describe("todoReducer", () => {
  test("should return default state", () => {
    const state = todoReducer(todos, {});

    expect(state).toEqual(todos);
  });

  test("should add todo", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender Express",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    const state = todoReducer(todos, action);

    expect(state.length).toBe(3);
    expect(state).toEqual([...todos, newTodo]);
  });

  test("should delete todo", () => {
    const action = {
      type: "delete",
      payload: 2,
    };

    const state = todoReducer(todos, action);

    expect(state.length).toBe(1);
    expect(state).toEqual([todos[0]]);
  });

  test("should change done state", () => {
    const action = {
      type: "toggle",
      payload: 1,
    };

    const state = todoReducer(todos, action);

    expect(state[0].done).toEqual(true);
    expect(state[1].done).toEqual(false);
  });
});
