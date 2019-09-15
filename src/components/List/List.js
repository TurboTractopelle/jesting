import React, { Component } from "react";
import PropTypes from "prop-types";

class List extends Component {
  render() {
    const { title } = this.props;

    if (!title) {
      return null;
    }

    return <div></div>;
  }
}

List.propTypes = {
  title: PropTypes.string
};

export default List;
