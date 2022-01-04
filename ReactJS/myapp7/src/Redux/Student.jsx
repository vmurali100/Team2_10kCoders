import React, { Component } from "react";
import { connect } from "react-redux";


class Student extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.employee.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    employee: state.employee,
  };
}
export default connect(mapStateToProps)(Student);
