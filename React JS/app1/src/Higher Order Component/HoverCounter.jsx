import React, { Component } from "react";
import { HOComponent } from "./HOComponent";

class HoverCounter extends Component {
  render() {
    let { handleCount, count } = this.props;
    return (
      <div>
        <h1 onMouseOver={handleCount}>
          You Hovered {count} times
        </h1>
      </div>
    );
  }
}

export default HOComponent(HoverCounter);