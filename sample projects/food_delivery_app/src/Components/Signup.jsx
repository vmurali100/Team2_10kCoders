import React from "react";
import { useState } from "react";

export const Signup = ()=>{

 const [user ,setUser] =  useState({
  id : null ,
  username : "" ,
  email : "" ,
  password : "" ,
  address :{
      houseno : null ,
      street : "" ,
      city : "" ,
      state : "" ,
      zip : null }
 })
 
 const handlechange =(e)=>{
  // var newuser = JSON.parse(JSON.stringify(user)) ;
  var newuser = {...user}
   newuser[e.target.name] = e.target.value ;
   setUser(newuser) ;
  
 }
 const storeData =() =>{
  console.log(user)
 }
    return <div>
  <div className="container" style={{"marginTop": "80px"}}>
      <div className="row">
          <div className="col-3"></div>
          <div className="col-6"> 
          <h1>SIGN UP</h1>
          <form>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="username" className="form-control" id="username" value={user.username}  onChange={(e)=>handlechange(e)} name="username"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={user.email} onChange={(e)=>handlechange(e)} name="email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={user.password} onChange={(e)=>handlechange(e)} name="password" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="hno" className="form-label">H.No</label>
    <input type="number" id="hno" value={user.address.houseno} onChange={(e)=>handlechange(e)} name="houseno"/>
    <label htmlFor="street" className="form-label" >Street</label>
    <input type="text"  id="street" value={user.address.street} onChange={(e)=>handlechange(e)} name="street"/> <br /> <br />
    <label htmlFor="city" className="form-label">City</label>
    <input type="text" id="city" value={user.address.city} onChange={(e)=>handlechange(e)} name="city"/>
    <label htmlFor="state" className="form-label" >State</label>
    <input type="text"  id="state" value={user.address.state}  onChange={(e)=>handlechange(e)} name="state"/> <br /> <br />
    <label htmlFor="zip" className="form-label">Zip</label>
    <input type="number"  id="zip" value={user.address.zip} onChange={(e)=>handlechange(e)} name="zip"/>
  </div>

  <button type="button" class="btn btn-primary" onClick={(e)=>{storeData(e)}}>Sign Up</button>
</form>
          </div>
          <div className="col-3"></div>
      </div>
  </div>
    </div>
}