
import React, { Component } from "react";

export default class UpdatingD extends Component {

    constructor(props) {
    super(props);
    console.log("I am from Constructor from Updating-D");
    this.state={}
  }
  static getDerivedStateFromProps(state, props) {
    console.log("I am from getDerivedStateFromProps", state, props);
    return null;
  }
  shouldComponentUpdate(){
      console.log("I am from shouldComponentUpdate - from Updating-D")
      return true
  }
  getSnapshotBeforeUpdate(){
      console.log("I am from getSnapshotBeforeUpdate - from Updating-D")
      return null
  }

  componentDidUpdate(){
    console.log("I am from componentDidUpdate - from Updating-D");

  }
  render() {
      console.log("I am from Render - from Updating-D")
    return (
      <div>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}