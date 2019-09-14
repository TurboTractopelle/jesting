import React from 'react';
import './App.scss';
import Header from "./components/Header/Header"
import Headline from "./components/Headline/Headline"

function App() {
  return (
    <div className="App">
     <Header />
     <Headline header="header" desc="long desc"/>
     <main>
      
     </main>
    </div>
  );
}

export default App;
