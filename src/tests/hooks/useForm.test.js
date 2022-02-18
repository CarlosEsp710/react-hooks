import { renderHook, act } from "@testing-library/react-hooks";

import { useForm } from "../../hooks/useForm";

describe("useForm", () => {
  const initialForm = {
    name: "Carlos Espejel",
    email: "carlosespejel71@gmail.com",
  };

  test("should return default form", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [form, handleInputChange, reset] = result.current;

    expect(form).toEqual(initialForm);
    expect(typeof handleInputChange).toEqual("function");
    expect(typeof reset).toEqual("function");
  });

  test("should change the value of the form(name)", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });
    });

    const [form] = result.current;

    expect(form).toEqual({
      ...initialForm,
      name: "Melissa",
    });
  });

  test("should reset the form values", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });

      reset();
    });

    const [form] = result.current;

    expect(form).toEqual(initialForm);
  });
});
