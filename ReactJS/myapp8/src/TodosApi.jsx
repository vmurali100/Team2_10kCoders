import React, { Component } from "react";
import { getApiDataAction } from "./JSON-API/TODOS/Action/Action";
import { connect } from "react-redux";

class TodosApi extends Component {
    render() {
  return <div>
      <button type="button" onClick={this.props.getUserFunc()}>GET TODOS</button>
  </div>
    }
}
const MSTP =(state)=>{
    return {
      todos : state
    }
}
const MDTP = (dispatch)=>{
    return {
        getUserFunc : ()=>(dispatch(getApiDataAction()))
    }
}
 export default connect(MSTP , MDTP)(TodosApi)