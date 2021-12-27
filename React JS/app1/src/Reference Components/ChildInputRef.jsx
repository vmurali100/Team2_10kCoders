import React, { Component } from "react";

export default class ChildInputRef extends Component {
  showWelcomMessasge = () => {
    alert("Hey I am from ChildInputRef Component");
  };

  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}