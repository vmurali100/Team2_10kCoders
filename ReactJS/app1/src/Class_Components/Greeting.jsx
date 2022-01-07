import { Component } from "react";

export default class Greeting extends Component {
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    return (
      <div>
        {/* <h3 style={{ color: "red" }}>{this.props.msg}</h3>
        <h3>{this.props.welc}</h3> */}
        <h2>{this.props.message}</h2>
        <h3>{this.props.welcomeMsg}</h3>
        <p>{this.props.user}</p>
      </div>
    );
  }
}
