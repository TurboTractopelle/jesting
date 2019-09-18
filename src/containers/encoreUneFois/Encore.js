import React, { Component } from "react";
import topmodule from "./topmodule";

class Encore extends Component {
  state = { value: 0 };

  basicClick = val => () => this.setState({ value: val });

  clickMethDep = val => () => this.setState({ value: this.myMeth(val) });
  myMeth = val => val + 1;

  clickMethMod = val => () => this.setState({ value: topmodule.magie(val) });

  clickMethProm = val => async () =>
    this.setState({ value: await topmodule.magieProm(val) });

  render() {
    return (
      <div>
        <p>
          <button onClick={this.basicClick(5)} data-test="basic-click">
            basic click
          </button>
          value:{this.state.value}
        </p>

        <p>
          <button onClick={this.clickMethDep(5)} data-test="clickMethDep">
            basic click
          </button>
          value:{this.state.value}
        </p>

        <p>
          <button onClick={this.clickMethMod(5)} data-test="clickMethMod">
            basic click
          </button>
          value:{this.state.value}
        </p>

        <p>
          <button onClick={this.clickMethProm(5)} data-test="clickMethProm">
            basic click
          </button>
          value:{this.state.value}
        </p>
      </div>
    );
  }
}

export default Encore;
