import React, { Component } from "react";
import ChildInputRefE from "./ChildInputRefE";

export default class InputRefComponentE extends Component {
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
        <ChildInputRefE ref={this.childCompRef} />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.childCompRef);
  
  }
}