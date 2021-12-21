
import React, { Component } from "react";

export default class UpdatingE extends Component {

    constructor(props) {
    super(props);
    console.log("I am from Constructor from Updating-E");
    this.state={}
  }
  static getDerivedStateFromProps(state, props) {
    console.log("I am from getDerivedStateFromProps-E", state, props);
    return null;
  }
  shouldComponentUpdate(){
      console.log("I am from shouldComponentUpdate - from Updating-E")
      return true
  }
  getSnapshotBeforeUpdate(){
      console.log("I am from getSnapshotBeforeUpdate - from Updating-E")
      return null
  }

  componentDidUpdate(){
    console.log("I am from componentDidUpdate - from Updating-E");

  }
  render() {
      console.log("I am from Render - from Updating-E")
    return (
      <div>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}