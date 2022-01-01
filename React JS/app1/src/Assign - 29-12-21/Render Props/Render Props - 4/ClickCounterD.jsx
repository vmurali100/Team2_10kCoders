import React, { Component } from "react";
import { HOComponentD } from "./HOComponentD";

class ClickCounterD extends Component {
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

export default HOComponentD (ClickCounterD);;