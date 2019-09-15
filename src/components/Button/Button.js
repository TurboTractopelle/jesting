import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

export class Button extends Component {
  fetchData = () => {
    this.props.fetch();
  };

  render() {
    return (
      <div>
        <button onClick={() => this.fetchData()}>fetch</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(actions.fetch())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Button);
