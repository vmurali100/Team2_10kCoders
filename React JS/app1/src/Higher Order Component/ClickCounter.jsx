import React, { Component } from "react";
import { HOComponent } from "./HOComponent";

class ClickCounter extends Component {
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

export default HOComponent (ClickCounter);;