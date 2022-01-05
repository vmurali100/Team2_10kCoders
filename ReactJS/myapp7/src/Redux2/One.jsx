import React, { Component } from "react";
import { connect } from "react-redux";


class One extends Component {
    
  render() {
    console.log(this.props);
    return ( <div>
{/* {this.props.one.map((e)=>{
  return <li>{e}</li> */}
{/* })} */}
    </div>

    )
  }
}
function mapStateToProps(state1) {
  return {
    one: state1.one
  };
}
export default connect(mapStateToProps)(One);
