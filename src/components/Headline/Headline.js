import React, { Component } from "react";
import "./styles.scss";
import PropTypes from "prop-types";

export default class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div className="Headline" data-test="Headline">
        <h2 data-test="header">{header}</h2>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

// [{nb:100, open:true}]

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  temp: PropTypes.arrayOf(
    PropTypes.shape({
      nb: PropTypes.number,
      open: PropTypes.bool
    })
  )
};
