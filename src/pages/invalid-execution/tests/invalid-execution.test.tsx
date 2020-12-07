import React from "react";
import { shallow, mount } from "enzyme";
import { InvalidExecution } from "../invalid-execution";

describe("Welcome", () => {
  it("Renders without crashing", () => {
    const wrapper = shallow(<InvalidExecution />);
    expect(wrapper).toMatchSnapshot();
  });
});
