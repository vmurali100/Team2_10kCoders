import React, { Component } from "react";
import LcCc from "./LcCc";

export default class Lcp4 extends Component {
  constructor(props) {
    console.log("constructor Area");
    super(props);
    this.state = [
      "good morning ",
      "good afnoon",
      "good evening ",
      "good night",
    ];
  }
  static getDerivedStateFromProps(state, props) {
    console.log("get derived state from props area", state, props);
    return null;
  }
  componentDidMount() {
    console.log(" componentDidMount area");
  }
  shouldComponentUpdate() {
    console.log("  shouldComponentUpdate area");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log(" getSnapshotBeforeUpdate area");
  }
  componentDidUpdate() {
    console.log("componentDidupdate area");
  }
  componentWillUnmount() {
    console.log("componentwillunmount area");
  }
  deleteGoodInMorning(morning){
    let newgreet = this.state.filter((greet) =>{
        return greet !== morning});
    this.setState(newgreet);
  }
  render() {
    console.log("render area");
    return (
      <div>
        <LcCc greeting={this.state} deletebtn={()=>this.deleteGoodInMorning()} />
      </div>
    );
  }
}
