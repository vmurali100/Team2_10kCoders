import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataAction, getFnameAction } from "../Redux/Actions/index.js";

class  Person extends Component  {
 render(){
     console.log(this.props)
    return <div>
        <button type="button" onClick={()=>this.props.getDataFunc()}>GET DATA</button>
        {this.props.person.map((e)=> <h1>{e.email}</h1>)}

        <button type="button" onClick={()=>this.props.getFnameFunc()}>GET FNAME</button>
        {this.props.person.map((e)=> <h1>{e.fname}</h1>)}
    </div>
 }
};

const MSTP =(state)=>{
    return {
        person : state ,
        fname : state
    }
}
 const MDTP = (dispatch)=>{
  return {
      getDataFunc : ()=>dispatch(getDataAction()),
      getFnameFunc : ()=>dispatch (getFnameAction())
  }
 }
export default connect(MSTP, MDTP)(Person);
