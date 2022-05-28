import React from 'react'
import { useState,useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { registeraction } from '../redux/actions'
const Registration = () => {
  const registereddata=useSelector(state=>state.registerdata)
  let navigate=useNavigate()
  const dispatch=useDispatch()
 const[users,setusers]=useState({
   "email":"",
   "name":"",
   "phone":"",
   "password":"",
   "confirmPassword":"",
})
useEffect(() => {
  if(registereddata.status===200){
    navigate("/emailverification")
    alert(registereddata.data)
  }else if(registereddata.status===400){
    alert("some issues are there,register again")

navigate("/registration")
  }

 
}, [registereddata.status])

const handlechange=(e)=>{
  let newusers={...users}
  newusers[e.target.name]=e.target.value
  setusers(newusers)
}

const handlesubmit=(users)=>{
  console.log(users)
  dispatch(registeraction(users))
 
}

  return (
    <div>
     
  <br/>
  <div style={{display:'grid',justifyContent:'center',alignitems:'center'}}>
          <form>

  <div class="mb-3"  >

    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" value={users.email} onChange={(e)=>{handlechange(e)}} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">name</label>
    <input type="text" class="form-control" name="name" value={users.name} onChange={(e)=>{handlechange(e)}}/>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="text" class="form-control" name="phone" value={users.phone} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">password</label>
    <input type="password" class="form-control" name="password" value={users.password} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">confirmPassword</label>
    <input type="password" class="form-control" name="confirmPassword" value={users.confirmPassword} onChange={(e)=>{handlechange(e)}}/>
  </div>
  

  <button type="button" class="btn btn-primary" onClick={()=>{handlesubmit(users)}}>Submit</button>
  </form>
  </div>
  Already a member?
  <div class="nav-item">
              <Link to="/login" className="nav-link link-dark px-2">Login here</Link>
            </div>
</div>
  )
}

export default Registration
