import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { findByTestAttribute } from "../utils/testingUtils";

const setup = (props = {}) => shallow(<App {...props} />);

describe("App", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = setup();
  });

  it("renders the comp", () => {
    expect(findByTestAttribute(wrapper, "App")).toHaveLength(1);
  });
});
