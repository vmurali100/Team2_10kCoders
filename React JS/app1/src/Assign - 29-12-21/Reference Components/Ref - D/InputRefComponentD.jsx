import React, { Component } from "react";
import ChildInputRefD from "./ChildInputRefD";

export default class InputRefComponentD extends Component {
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
        <ChildInputRefD ref={this.childCompRef} />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.childCompRef);
   
  }
}