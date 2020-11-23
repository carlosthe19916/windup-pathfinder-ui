import React from "react";
import { shallow, mount } from "enzyme";
import { Welcome } from "../welcome";

describe("Welcome", () => {
  it("Renders without crashing", () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper).toMatchSnapshot();
  });
});
