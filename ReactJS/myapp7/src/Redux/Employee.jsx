import React, { Component } from "react";
import { connect } from "react-redux";


class Employee extends Component {
  render() {
    console.log(this.props.employee);
    return (
      <div>
        {this.props.employee.employee.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    employee: state.employee,
    
  };
}
export default connect(mapStateToProps)(Employee);
