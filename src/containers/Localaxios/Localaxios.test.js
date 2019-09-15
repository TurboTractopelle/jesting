import { findByTestAttribute } from "../../../utils/testingUtils";
import Localaxios from "../Localaxios/Localaxios";
import { shallow } from "enzyme";
import React from "react";
import axios from "axios";

const setup = (props = {}) => shallow(<Localaxios {...props} />);

describe("", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = setup();
  });

  it("works fine for sync button", () => {
    const button = findByTestAttribute(wrapper, "button-sync");
    button.simulate("click");
    expect(wrapper.state().counter).toBe(5);
  });

  it("clicks on async", () => {
    const button = findByTestAttribute(wrapper, "button-async");
    button.simulate("click");

    jest.mock("axios");
    console.log(button.debug());
    expect(2).toBe(1);
  });
});
