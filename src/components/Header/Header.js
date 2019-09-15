import React, { Component } from "react";
import "./styles.scss";
import logo from "../../assets/logo.png";

export default class Header extends Component {
  render() {
    return (
      <header data-test="Header">
        <div className="wrap">
          <img src={logo} alt="logo" data-test="logo" />
        </div>
      </header>
    );
  }
}
