import React from "react";
import { shallow } from "enzyme";
import ItemsList from "./ItemsList";

describe("ItemsList Component", () => {
  let component;

  beforeEach(() => {
    const items = [
      { id: 1, name: "item1" },
      { id: 2, name: "item2" },
      { id: 3, name: "item3" },
    ];
    return (component = shallow(<ItemsList items={items} type={"users"} />));
  });

  afterEach(() => {
    component.unmount();
  });

  it("Should render without errors", () => {
    const wrapper = component.find("[test-class='ItemsList']");
    expect(wrapper.length).toBe(1);
  });

  it("Should render the correct number of items", () => {
    const wrapper = component.find("[test-class='Item']");
    expect(wrapper.length).toBe(3);
  });
});
