import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataAction, getEmployeeAction, getFnameAction } from "../Redux/Actions/index.js";

class  Person extends Component  {
 render(){
     console.log(this.props)
    return <div>
        {/* fill text - person */}
        <button type="button" onClick={()=>this.props.getDataFunc()}>GET DATA</button>
        {this.props.person.map((e)=> <h1>{e.address}</h1>)}
          {/* filltext - name */}
       
        {this.props.fname ? this.props.fname.map((e)=> <h1>{e.fname}</h1>): <button type="button" onClick={()=>this.props.getFnameFunc()}>GET FNAME</button>}
        {/* filltext - employee */}
        <button type="button" onClick={()=>this.props.getEmployeeFunc()}>GET EMPLOYEE</button>
        {this.props.employee.map((e)=> <h1>{e.username}</h1>)}
    </div>
 }
};

const MSTP =(state)=>{
    return {
        person : state ,
        fname : state ,
        employee :state,
    }
}
 const MDTP = (dispatch)=>{
  return {
      getDataFunc : ()=>dispatch(getDataAction()),
      getFnameFunc : ()=>dispatch (getFnameAction()) ,
      getEmployeeFunc : ()=>dispatch(getEmployeeAction())
  }
 }
export default connect(MSTP, MDTP)(Person);
