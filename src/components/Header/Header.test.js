import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAttribute } from "../../../utils/testingUtils";

const setup = (props = {}) => shallow(<Header {...props} />);

describe("Header", () => {
  let wrapper;
  beforeAll(() => (wrapper = setup()));
  it("renders the compo", () => {
    expect(findByTestAttribute(wrapper, "Header")).toHaveLength(1);
  });
});
