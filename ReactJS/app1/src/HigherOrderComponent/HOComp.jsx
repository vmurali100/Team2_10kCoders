import React, { Component } from "react";

export const HOComp = (OriginalComponent) => {
  // Creating New Class Component Which Returns the Original Component
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return <OriginalComponent count={this.state.count} handleCount={this.handleCount}/>;
    }
  }

  return NewComponent;
};
