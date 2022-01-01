import React, { Component } from "react";
import ChildInputRefC from "./ChildInputRefC";

export default class InputRefComponentC extends Component {
  constructor(props) {
    super(props);

   
    this.childCompRef = React.createRef();
  }

  handleWelcome = () => {
    this.childCompRef.current.showWelcomMessasge();
  };

  render() {
    return (
      <div>

        <button onClick={this.handleWelcome}>Show Welcome</button>
        <hr />
        <ChildInputRefC ref={this.childCompRef} />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.childCompRef);
    // this.inputRef.current.focus()
    // this.inputRef.focus()
  }
}