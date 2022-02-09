import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
  let navigate = useNavigate()

  const[adminval,setadminval] = useState({email:"",password:""})

  const handleChange = (e)=>{
    let newval = {...adminval}
    newval[e.target.name] = e.target.value
    setadminval(newval)
  }

  const handleLogInToAdminPage = ()=>{
    axios.get("http://localhost:3000/admin").then((res)=>{
      for(var a in res.data){
       
      if(res.data[a].email == adminval.email && res.data[a].password == adminval.password){
       navigate("/districts")
      }
      }
    })
  }

  return <div>
      <form style={{padding:"0px 100px 0px 100px"}}>
      <div class="form-group" >
        <label >Enter Admin Email</label>
        <input type="email" className="form-control" name='email' value={adminval.email} 
        onChange={(e)=>{handleChange(e)}}/>
        
      </div>

      <div class="form-group" >
        <label >Enter Admin Password</label>
        <input  className="form-control" type="password"  name='password' value={adminval.password}
        onChange={(e)=>{handleChange(e)}}/>
      </div>
      
      <button type="button" className="btn btn-primary" onClick={handleLogInToAdminPage} >LogInToAdminPage</button>
    </form>
  </div>;
};
