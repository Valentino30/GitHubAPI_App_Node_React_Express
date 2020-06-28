import React from "react";
import { shallow } from "enzyme";
import ItemsListContainer from "./ItemsListContainer";

describe("ItemsList Container", () => {
  it("Should render without errors", () => {
    const match = {
      params: {
        userId: 1,
      },
    };
    const component = shallow(
      <ItemsListContainer match={match} type={"repos"} />
    );
    const wrapper = component.find("[test-class='ItemsListContainer']");
    expect(wrapper.length).toBe(1);
  });
});
