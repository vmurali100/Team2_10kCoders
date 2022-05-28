import axios from 'axios'
import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  let navigate=useNavigate();
   const[user,setuser] =useState({
email:"",
password:""
   })
   const handlechange=(e)=>{
let newuser={...user}
newuser[e.target.name]=e.target.value
setuser(newuser)
   }
const handlesubmit=async()=>{
let users=await getallusers();
console.log(users)
if(users.length==0){
  alert("you are not registered..please register and login again")
  navigate("/register") 

}else{
  let loggedinuser=users.find(myuser=>user.email==myuser.email&& user.password==myuser.password)
  if(loggedinuser){
    localStorage.setItem("loggedinuser",JSON.stringify(loggedinuser))
navigate("/")
  }else{
    alert("you are not registered..please register and login again")
navigate("/register") 
  }
}
   }
   const getallusers=()=>{
       return new Promise((resolve,reject)=>{
        axios.get("http://localhost:3000/users").then((res)=>{
            resolve(res.data)
 
        })
       })
      
   }
  return (
    <div>
    <div className="container">
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" value={user.email} onChange={(e)=>{handlechange(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={user.password} onChange={(e)=>{handlechange(e)}}/>
  </div>
 
  <button type="button" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
</form>
    </div>
    </div>
  )
}
