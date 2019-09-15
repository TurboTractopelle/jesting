import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
import Button from "./components/Button/Button";
import { connect } from "react-redux";
import List from "./components/List/List";

const temp = [{ nb: 100, open: true }];

export class App extends Component {
  render() {
    const { loading } = this.props;

    const display = loading ? "Loading..." : <List />;

    return (
      <div className="App" data-test="App">
        <Header />
        <Headline header="header" desc="long desc" temp={temp} />
        <main>
          <div className="wrap">
            <Button />
            {display}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.articles.loading
  };
};

export default connect(mapStateToProps)(App);
