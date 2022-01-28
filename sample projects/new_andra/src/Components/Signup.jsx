import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = ()=>{
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
    const registerUser = async(e)=>{
       
        console.log(user)
       
        axios.post("http://localhost:3000/user" , user).then((res)=> console.log(res.data , user));
    
        alert("Registration succesfull ....!")  
        navigate("/login") 
    
    }
    return <div>
        <div className="container" style={{"marginTop" : "80px"}}>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                {/* className="resform" style={{"display" : "none"}} */}
                <form >
    <h2>Sign Up</h2>
   
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" value={user.email} onChange={(e)=>{handlechange(e)}} name="email"/>
    </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" value={user.password} onChange={(e)=>{handlechange(e)}} name="password" />
  </div>
  
  <button type="button" class="btn btn-primary" onClick={registerUser}>Sign Up</button>
  </form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
}