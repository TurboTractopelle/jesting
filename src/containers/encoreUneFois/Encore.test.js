import React from "react";
import Encore from "./Encore";
import { shallow } from "enzyme";
import { findByTestAttribute } from "../../../utils/testingUtils";

let wrapper;
const setup = (props = {}) => shallow(<Encore {...props} />);
jest.mock("./topmodule.js");

describe("Encore", () => {
  beforeAll(() => {
    wrapper = setup();
  });

  it("basic click", () => {
    const button = findByTestAttribute(wrapper, "basic-click");
    button.simulate("click");

    // ça marche aussi
    // expect(wrapper.instance().state.value).toBe(5);
    expect(wrapper.state().value).toBe(5);
  });

  it("using metho dep", () => {
    const button = findByTestAttribute(wrapper, "clickMethDep");
    // on est en shallow là
    // on récupère, la méthode et on la mock
    wrapper.instance().myMeth = jest.fn(() => "gg");
    button.simulate("click");
    expect(wrapper.state().value).toBe("gg");
  });

  it("using mod", () => {
    const button = findByTestAttribute(wrapper, "clickMethMod");
    button.simulate("click");
    expect(wrapper.state().value).toBe("MOCKED topmodule");
  });
  /*
  it("using mod prom", () => {
    const button = findByTestAttribute(wrapper, "clickMethProm");
    button.simulate("click");
    setTimeout(() => "lol", 2000);
    return expect(wrapper.state().value).toBe("MOCKED promise");
  });*/
});
