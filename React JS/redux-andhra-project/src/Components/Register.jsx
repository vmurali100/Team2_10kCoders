import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { SignupAction } from "../Actions";

const Register = (props)=>{
    const [ user , setUser]  =  useState({
        email : "" ,
         password : "" ,
    }) ;
    const navigate = useNavigate()
    const handlechange = (e)=>{
        let newuser = {...user} ;
        newuser[e.target.name] = e.target.value ;
       setUser(newuser);
    } ;
   
    return <div>
        <div className="container" style={{"marginTop" : "80px",backgroundColor:"pink",width:"700px",padding:"10px 0px 10px 0px"}}>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                {/* className="resform" style={{"display" : "none"}} */}
                <form >
    <h2>Sign Up</h2>
   
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" placeholder="Enter E-Mail" class="form-control" value={user.email} onChange={(e)=>{handlechange(e)}} name="email"/>
    </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" placeholder="Enter Password" class="form-control" value={user.password} onChange={(e)=>{handlechange(e)}} name="password" />
  </div>
  
  <button type="button"  class="btn btn-primary" onClick={()=>props.signupFunc(user , ()=>navigate("/login") )}>Sign Up</button>
  </form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
}
const MSTP =(state)=>{
    return {
        
    }
}
const MDTP =(dispatch)=>{
    return {
        signupFunc : (user ,x)=>dispatch(SignupAction(user ,x)),
        // loginFunc : ()=>dispatch(LoginAction())
    }
}

export default  connect(MSTP , MDTP )(Register)