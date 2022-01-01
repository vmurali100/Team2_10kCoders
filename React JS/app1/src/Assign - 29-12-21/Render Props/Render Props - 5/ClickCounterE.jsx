import React, { Component } from "react";
import { HOComponentE } from "./HOComponentE";

class ClickCounterE extends Component {
  render() {
    let { handleCount, count } = this.props;
    return (
      <div>
        <button onClick={handleCount}>Click Me</button>
        <h1>You Clicked {count} times</h1>
      </div>
    );
  }
}

export default HOComponentE (ClickCounterE);;