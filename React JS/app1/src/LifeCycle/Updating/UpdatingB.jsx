
import React, { Component } from "react";

export default class UpdatingB extends Component {

    constructor(props) {
    super(props);
    console.log("I am from Constructor from Updating - B");
    this.state={}
  }
  static getDerivedStateFromProps(state, props) {
    console.log("I am from getDerivedStateFromProps", state, props);
    return null;
  }
  shouldComponentUpdate(){
      console.log("I am from shouldComponentUpdate - from Updating  - B")
      return true
  }
  getSnapshotBeforeUpdate(){
      console.log("I am from getSnapshotBeforeUpdate - from Updating  - B")
      return null
  }

  componentDidUpdate(){
    console.log("I am from componentDidUpdate - from Updating  - B");

  }
  render() {
      console.log("I am from Render - from Updating  - B")
    return (
      <div>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}