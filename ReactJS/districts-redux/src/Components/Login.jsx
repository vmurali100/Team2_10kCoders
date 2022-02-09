import axios from "axios";
import React, { Component, useEffect, useState } from "react"; 
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginAction } from "../Actions";
import { UserConsumer } from "./Home";


const Login = (props)=>{
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
        {console.log(user)}
        <div className="container" style={{"marginTop" : "80px"}}> 
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                <form className="loginform">
                    <h2>Log In</h2>
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" value={user.email} onChange={(e)=>{handlechange(e)}} name="email"  style={{padding:"10px",margin:"10px",color:"red",fontWeight:"bold"}}/>
    </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" value={user.password} onChange={(e)=>{handlechange(e)}} name="password"  style={{padding:"10px",margin:"10px",color:"red",fontWeight:"bold"}}/>
  </div>
  
  <button type="button" class="btn btn-primary" onClick={()=>props.logInUserFunc(user , ()=> navigate("/register") ,()=> navigate("/") )}>Log In</button> <br />
   Don't Have Account ?   <button type="button" class="btn btn-warning" onClick={()=> navigate("/register")} style={{padding:"10px",margin:"10px",color:"red",fontWeight:"bold"}}>Register</button>
</form> 
 <br />


                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
  
}

const MSTP =(state)=>{
    return{
      
    }
}
const MDTP =(dispatch)=>{
    return{
        logInUserFunc : (user ,reg ,hm)=> dispatch(LoginAction(user , reg , hm))
    }
}
export default connect(MSTP ,MDTP)(Login)