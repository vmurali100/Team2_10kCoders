import React, { Component } from "react";

export default class ChildComp extends Component {
  constructor(props) {
    super(props);
    console.log("I am from Constructor from ChildComp");
    this.state={}
  }
  static getDerivedStateFromProps(state, props) {
    console.log("I am from getDerivedStateFromProps", state, props);
    return null;
  }
  shouldComponentUpdate(){
      console.log("I am from shouldComponentUpdate - from ChildComp")
      return true
  }
  getSnapshotBeforeUpdate(){
      console.log("I am from getSnapshotBeforeUpdate - from ChildComp")
      return null
  }

  componentDidUpdate(){
    console.log("I am from componentDidUpdate - from ChildComp");

    // We need to write code which will excute after updation completed
  }
  render() {
      console.log("I am from Render - from ChildComp")
    return (
      <div>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}