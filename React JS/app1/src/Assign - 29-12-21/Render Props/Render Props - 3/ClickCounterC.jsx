import React, { Component } from "react";
import { HOComponentC } from "./HOComponentC";

class ClickCounterC extends Component {
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

export default HOComponentC (ClickCounterC);