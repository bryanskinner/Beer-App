import React, { Component } from "react";
import Beers from "./components/Beers";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1>Beers App</h1>
        <Beers />
      </>
    );
  }
}

export default App;
