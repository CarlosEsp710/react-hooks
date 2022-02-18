import React from "react";
import { shallow } from "enzyme";

import { MultipleCustomHooks } from "../../../components/examples/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("test <MultipleCustomHooks />", () => {
  beforeEach(() =>
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    })
  );

  test("should return component <MultipleCustomHooks />", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should return data when done loading", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Carlos",
          quote: "Hello, world!",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-3").text().trim()).toBe("Hello, world!");
    expect(wrapper.find("footer").text().trim()).toBe("Carlos");
  });
});
