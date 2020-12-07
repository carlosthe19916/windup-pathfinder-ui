import React from "react";
import { shallow } from "enzyme";
import { EmptyContent } from "../empty-content";

describe("EmptyContent", () => {
  it("Renders without crashing", () => {
    const wrapper = shallow(<EmptyContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
