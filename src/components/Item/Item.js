import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Item = props => {
  return (
    <div className="Item">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Item;

Item.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};
