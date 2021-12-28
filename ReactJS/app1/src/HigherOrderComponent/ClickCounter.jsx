import React, { Component } from "react";
import { HOComp } from "./HOComp";

class ClickCounter extends Component {
  render() {
    let { handleCount, count,someInfo } = this.props;
    return (
      <div>
        <button onClick={handleCount}>Click Me</button>
        <h1>You Clicked {count} times</h1>
        <p>{someInfo}</p>
      </div>
    );
  }
}

export default HOComp(ClickCounter);
