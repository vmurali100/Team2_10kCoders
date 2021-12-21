
import React, { Component } from "react";

export default class UpdatingA extends Component {

    constructor(props) {
    super(props);
    console.log("I am from Constructor from Updating - A");
    this.state={}
  }
  static getDerivedStateFromProps(state, props) {
    console.log("I am from getDerivedStateFromProps", state, props);
    return null;
  }
  shouldComponentUpdate(){
      console.log("I am from shouldComponentUpdate - from Updating - A")
      return true
  }
  getSnapshotBeforeUpdate(){
      console.log("I am from getSnapshotBeforeUpdate - from Updating -A")
      return null
  }

  componentDidUpdate(){
    console.log("I am from componentDidUpdate - from Updating - A");

  }
  render() {
      console.log("I am from Render - from Updating - A")
    return (
      <div>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}