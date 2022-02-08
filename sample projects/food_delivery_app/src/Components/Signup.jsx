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
  address :{
      houseno : null ,
      street : "" ,
      city : "" ,
      state : "" ,
      zip : null }
 })
 
 const handlechange =(e , id )=>{
  var newuser = JSON.parse(JSON.stringify(user)) ;
  // var newuser = {...user}
   newuser[e.target.name] = e.target.value ;
   var i = 0 ;
  var id = i++ ;
   setUser(newuser ,id) ;
  
 } ;
 useEffect(()=>{
 
 },[]) ;
 const storeData =() =>{
  console.log(user) ;

//   let options = {
//     method : "POST" ,
//     url :  "http://localhost:3000/foodie" ,
//     header : {} ,
//     data : user ,

//   }
//  let res =  axios(options) ;
//  console.log(res.data)
axios.post('http://localhost:3000/foodie' , user).then((res)=>{console.log(res.data)})
  }
 const {username ,email ,password ,address} = user
    return <div>
  <div className="container" style={{"marginTop": "80px"}}>
      <div className="row">
          <div className="col-3"></div>
          <div className="col-6"> 
          <h1>SIGN UP</h1>
          <form>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="username" className="form-control" id="username" value={username}  onChange={(e)=>handlechange(e)} name="username"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={email} onChange={(e)=>handlechange(e)} name="email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={password} onChange={(e)=>handlechange(e)} name="password" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="hno" className="form-label">H.No</label>
    <input type="number" id="hno" value={address.houseno} onChange={handlechange} name="houseno"/>
    <label htmlFor="street" className="form-label" >Street</label>
    <input type="text"  id="street" value={address.street} onChange={handlechange} name="street"/> <br /> <br />
    <label htmlFor="city" className="form-label">City</label>
    <input type="text" id="city" value={address.city} onChange={handlechange} name="city"/>
    <label htmlFor="state" className="form-label" >State</label>
    <input type="text"  id="state" value={address.state}  onChange={handlechange} name="state"/> <br /> <br />
    <label htmlFor="zip" className="form-label">Zip</label>
    <input type="number"  id="zip" value={address.zip} onChange={handlechange} name="zip"/>
  </div>

  <button type="button" class="btn btn-primary" onClick={(e)=>storeData(e)}>Sign Up</button>
</form>
          </div>
          <div className="col-3"></div>
      </div>
  </div>
    </div>
}