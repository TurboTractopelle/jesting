import React from "react";
import { shallow } from "enzyme";
import { List } from "./List";
import { findByTestAttribute } from "../../../utils/testingUtils";

const setup = (props = {}) => shallow(<List {...props} />);

describe("List", () => {
  describe("no props", () => {
    let wrapper;
    beforeAll(() => (wrapper = setup()));
    it("doesn't render the compo when no data", () => {
      console.log("compo", List);
      console.log("wrapper", shallow(<List />).debug());

      //console.log("here", wrapper.debug());
      expect(findByTestAttribute(wrapper, "List")).toHaveLength(0);
    });
  });

  describe("does display with data", () => {
    let wrapper;
    const data = [{ id: 1, title: "title", text: "text" }];
    beforeAll(() => (wrapper = setup({ data })));

    it("works", () => {
      expect(findByTestAttribute(wrapper, "List")).toHaveLength(1);
    });
  });
});
