import React, { Component } from "react";
import ChildInputRefB from "./ChildInputRefB";

export default class InputRefComponentB extends Component {
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
        <ChildInputRefB ref={this.childCompRef} />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.childCompRef);
    // this.inputRef.current.focus()
    // this.inputRef.focus()
  }
}