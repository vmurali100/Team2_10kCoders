import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login =()=>{
  let navigate = useNavigate()
  const [loggingUser ,setLogginguser] =useState({
    email: "" ,
    password : ""
  })
  const handleChange = (e)=>{
  let newuser = {...loggingUser};
  newuser[e.target.name] = e.target.value
  setLogginguser(newuser)

  }
  const userloginFunc = async()=>{
 console.log(loggingUser)
   axios.get('http://localhost:3000/foodie').then(({data})=>{
    let log = data.find((e)=> e.email == loggingUser.email && e.password == loggingUser.password)
    if(log){
      alert(`${loggingUser.email} Log in Sucessful`)
      navigate("/fooditems")
    }else{
      alert('User Not Found')
      navigate("/signup")
    }
   })
  }
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                <form>
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="text" class="form-control" value={loggingUser.email} name="email" onChange={(e)=>handleChange(e)}  />
    </div>
   
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="text" class="form-control" value={loggingUser.password} name="password" onChange={(e)=>handleChange(e)} />
  </div>
 
  <button type="button" class="btn btn-primary" onClick={()=>userloginFunc()}>Log in</button>
</form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
}