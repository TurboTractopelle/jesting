import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
const temp = [{nb:100, open:true}]

function App() {
  return (
    <div className="App" data-test="App">
      <Header />
      <Headline header="header" desc="long desc" temp={temp} />
      <main></main>
    </div>
  );
}

export default App;
