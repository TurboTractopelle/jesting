import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";

function findByTestAttr(component, attr) {
  return component.find(`[data-test='${attr}']`);
}

function setup(props = {}) {
  return shallow(<Headline {...props} />);
}

describe("Headline", () => {
  describe("with no props", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = setup();
    });

    it("does not display the comp", () => {
      expect(findByTestAttr(wrapper, "Headline")).toHaveLength(0);
    });
  });

  describe("with props", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = setup({ header: "header", desc: "desc" });
    });

    it("does display the comp", () => {
      expect(findByTestAttr(wrapper, "Headline")).toHaveLength(1);
    });

    it("displays the header", () => {
      expect(findByTestAttr(wrapper, "header").text()).toBe("header");
    });

    it("displays the desc", () => {
      expect(findByTestAttr(wrapper, "desc").text()).toBe("desc");
    });
  });
});
