import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const[user,setuser]=useState({
    fname:"",
    lname:"",
    username:"",
    email:"",
    password:""
  })
  let navigate=useNavigate()
  const handlechange=(e)=>{
let newuser={...user}
newuser[e.target.name]=e.target.value
setuser(newuser)
  }
  const handlesubmit=()=>{
    axios.post("http://localhost:3000/users",user).then((res)=>{
      alert("user registration is successful")
      navigate("/login")
    })
    console.log(user)
  }
  return (
    <div>
<div className="container">
    <form>
    <div className="mb-3">
      
      <label for="exampleInputEmail1" className="form-label">firstname</label>
      <input type="email" className="form-control" name="fname" value={user.fname}
      onChange={(e)=>{handlechange(e)}}/>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">lastname</label>
      <input type="text" className="form-control" name="lname" value={user.lname}
     onChange={(e)=>{handlechange(e)}} />
    </div>
   
  <div className="mb-3">
      
    <label for="exampleInputEmail1" className="form-label">username</label>
    <input type="text" className="form-control" name="username" value={user.username} 
    onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">email</label>
    <input type="text" className="form-control" name="email" value={user.email}
       onChange={(e)=>{handlechange(e)}}/>
       
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={user.password}
        onChange={(e)=>{handlechange(e)}}/>
        
  </div>
  
  <button type="button" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
</form>
    </div>
    </div>
  )
}
