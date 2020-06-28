import React from "react";
import { shallow } from "enzyme";
import NavBar from "./NavBar";

describe("NavBar Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<NavBar type={"Users"} />);
    const wrapper = component.find("[test-class='NavBar']");
    expect(wrapper.length).toBe(1);
  });
});
