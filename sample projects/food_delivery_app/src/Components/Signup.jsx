import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

export const Signup = ()=>{

 const [user ,setUser] =  useState({
  id : null ,
  username : "" ,
  email : "" ,
  password : "" ,
 
 })
 const [address ,setAddress] = useState({
    houseno : null ,
    street : "" ,
    city : "" ,
    state : "" ,
    zip : null 
 })
 
 const handlechange1 =(e , id )=>{
  // var newuser = JSON.parse(JSON.stringify(user)) ;
  var newuser = {...user}
   newuser[e.target.name] = e.target.value ;
   var i = 0 ;
  var id = i++ ;
   setUser(newuser ,id) ;
  
 } ;

 const handlechange2 =(f)=>{
const newadd = {...address}
newadd[f.target.name] =f.target.value
setAddress(newadd)
 }
 useEffect(()=>{
 
 },[]) ;
 const storeData =() =>{
  console.log(user) ;
  console.log(address)
  let signupdetails ={...user , address}

console.log(signupdetails)

axios.post('http://localhost:3000/foodie' , signupdetails).then((res)=>{console.log(res.data)})
  }
 const {username ,email ,password} = user
    return <div>
  <div className="container" style={{"marginTop": "80px"}}>
      <div className="row">
          <div className="col-3"></div>
          <div className="col-6"> 
          <h1>SIGN UP</h1>
          <form>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="username" className="form-control" id="username" value={username}  onChange={(e)=>handlechange1(e)} name="username"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={email} onChange={(e)=>handlechange1(e)} name="email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={password} onChange={(e)=>handlechange1(e)} name="password" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="hno" className="form-label">H.No</label>
    <input type="number" id="hno" value={address.houseno} onChange={(f)=>handlechange2(f)} name="houseno"/>
    <label htmlFor="street" className="form-label" >Street</label>
    <input type="text"  id="street" value={address.street} onChange={(f)=>handlechange2(f)} name="street"/> <br /> <br />
    <label htmlFor="city" className="form-label">City</label>
    <input type="text" id="city" value={address.city} onChange={(f)=>handlechange2(f)} name="city"/>
    <label htmlFor="state" className="form-label" >State</label>
    <input type="text"  id="state" value={address.state}  onChange={(f)=>handlechange2(f)} name="state"/> <br /> <br />
    <label htmlFor="zip" className="form-label">Zip</label>
    <input type="number"  id="zip" value={address.zip} onChange={(f)=>handlechange2(f)} name="zip"/>
  </div>

  <button type="button" class="btn btn-primary" onClick={(e)=>storeData(e)}>Sign Up</button>
</form>
          </div>
          <div className="col-3"></div>
      </div>
  </div>
    </div>
}