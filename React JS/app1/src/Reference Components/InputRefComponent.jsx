import React, { Component } from "react";
import ChildInputRef from "./ChildInputRef";

export default class InputRefComponent extends Component {
  constructor(props) {
    super(props);

    // this.inputRef = React.createRef()
    // this.inputRef = null
    // this.cbInputRef = (element)=>{
    //     this.inputRef = element
    // }
    this.childCompRef = React.createRef();
  }

  handleWelcome = () => {
    this.childCompRef.current.showWelcomMessasge();
  };

  render() {
    return (
      <div>
        {/* <input type="text" ref={this.cbInputRef}/> */}

        <button onClick={this.handleWelcome}>Show Welcome</button>
        <hr />
        <ChildInputRef ref={this.childCompRef} />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.childCompRef);
    // this.inputRef.current.focus()
    // this.inputRef.focus()
  }
}