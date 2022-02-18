import { renderHook, act } from "@testing-library/react-hooks";

import { useCounter } from "../../hooks/useCounter";

describe("useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("should receive the value of the counter", () => {
    const counter = 100;
    const { result } = renderHook(() => useCounter(counter));

    expect(result.current.counter).toBe(counter);
  });

  test("should increment the counter value by one", () => {
    const counter = 100;
    const { result } = renderHook(() => useCounter(counter));
    const { increment } = result.current;

    act(() => increment());

    expect(result.current.counter).toBe(101);
  });

  test("should decrement the counter value by one", () => {
    const counter = 100;
    const { result } = renderHook(() => useCounter(counter));
    const { decrement } = result.current;

    act(() => decrement());

    expect(result.current.counter).toBe(99);
  });

  test("should reset the counter value", () => {
    const counter = 100;
    const { result } = renderHook(() => useCounter(counter));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(counter);
  });
});
