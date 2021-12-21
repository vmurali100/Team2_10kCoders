
import React, { Component } from "react";

export default class UpdatingC extends Component {

    constructor(props) {
    super(props);
    console.log("I am from Constructor from Updating-C");
    this.state={}
  }
  static getDerivedStateFromProps(state, props) {
    console.log("I am from getDerivedStateFromProps", state, props);
    return null;
  }
  shouldComponentUpdate(){
      console.log("I am from shouldComponentUpdate - from Updating-C")
      return true
  }
  getSnapshotBeforeUpdate(){
      console.log("I am from getSnapshotBeforeUpdate - from Updating-C")
      return null
  }

  componentDidUpdate(){
    console.log("I am from componentDidUpdate - from Updating-C");

  }
  render() {
      console.log("I am from Render - from Updating-C")
    return (
      <div>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}