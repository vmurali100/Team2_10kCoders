import React, { Component } from "react";
import { Lifecycle2 } from "./Lifecycle2";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 12,
    };
    console.log("am form the constructor");
  }
  // static getDerivedStateFromProps (state, props) {
  //   console.log("am from getDerivedstatefromprops", state, props);
  //   return 5;
  // }
//   static getDerivedStateFromProps(state , props){
//     this.setState({count:10})
//    return document.getElementById("me").innerHTML = this.state.count 
// }

  changecount= ()=> {
   return this.setState({
      count: this.state.count + 1,
    });
  }
  componentDidMount() {
   return console.log("am from the component did mount" );
  }

  render() {
    console.log("am from render ");
    return (
      <div>
        <p>am from life cycle component {this.state.count}</p>
        <p id="me"></p>
        <button onClick={this.changecount}>click me </button>
        <Lifecycle2 std={this.count}/>
      </div>
    );
  }
}
