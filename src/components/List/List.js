import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Item from "../Item/Item";

export class List extends Component {
  render() {
    if (!this.props.data) {
      return null;
    }

    const display = this.props.data.map(itemData => (
      <Item {...itemData} key={itemData.id} />
    ));

    return <div data-test="List">{display}</div>;
  }
}

List.propTypes = {
  title: PropTypes.string
};

const mapStateToProps = state => {
  return {
    data: state.articles.data
  };
};

export default connect(mapStateToProps)(List);
