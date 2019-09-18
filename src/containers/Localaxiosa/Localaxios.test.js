import { findByTestAttribute } from "../../../utils/testingUtils";
import Localaxios from "./Localaxios";
import { shallow } from "enzyme";
import React from "react";
import mymod from "./mymod";

let setup = (props = {}) => shallow(<Localaxios {...props} />);

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

  it("sync button with method dep", () => {
    const button = findByTestAttribute(wrapper, "button-sync-trick");

    // get the alacon methode and mock it
    wrapper.instance().alacon = jest.fn();
    wrapper.update();
    button.simulate("click");

    expect(wrapper.instance().alacon).toBeCalledWith(5);
  });

  it("sync button with module dep", () => {
    const button = findByTestAttribute(wrapper, "button-sync-trick-mod");

    const addMock = jest.spyOn(mymod, "magie");
    button.simulate("click");
    //expect(wrapper.state().counter).toBe("mooooooocked");
    expect(addMock).toBeCalledWith(6);
  });

  /*
  it("clicks on async", () => {
    const button = findByTestAttribute(wrapper, "button-async");
    button.simulate("click");

    jest.mock("axios");
    console.log(button.debug());
    expect(2).toBe(1);
  });*/
});
