import React, { Component } from "react";
import ChildInputRefA from "./ChildInputRefA";

export default class InputRefComponentA extends Component {
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
        <ChildInputRefA ref={this.childCompRef} />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.childCompRef);
    // this.inputRef.current.focus()
    // this.inputRef.focus()
  }
}