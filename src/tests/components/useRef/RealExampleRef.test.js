import React from "react";
import { shallow } from "enzyme";

import { RealExampleRef } from "../../../components/useRef/RealExampleRef";

describe("test <RealExampleRef />", () => {
  test("should return component <RealExampleRef />", () => {
    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("should show component <MultipleCustomHooks />", () => {
    const wrapper = shallow(<RealExampleRef />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
