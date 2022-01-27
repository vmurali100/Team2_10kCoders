import axios from "axios";
import React, { useState } from "react"; 
export const Login = ()=>{
  const [ user , setUser]  =  useState({
      email : "" ,
      password : ""

  }) ;
  const handlechange = (e)=>{
      let newuser = {...user} ;
      newuser[e.target.name] = e.target.value ;
      setUser(newuser)
  }
  const getuser =()=>{
      console.log(user)
  }
  const getResForm =()=>{
      document.querySelector(".loginform").style.display = "none" ;
      document.querySelector(".resform").style.display = "block"

  }
  const registerUser = async(e)=>{
    handlechange(e)
    console.log(user)
    // let options = {
    //     method : "POST" ,
    //     url : "http://localhost:3000/users" ,
    //     header : {'Content-Type': 'application/json' } ,
    //     body : JSON.stringify(user)
    // }
    // axios(options).then((res)=>{
    //     console.log(res.data)
    // })
    let response = await axios.post('http://localhost:3000/users' , JSON.stringify({email : user.email ,password : user.password})).then((res)=>{console.log(res)}).catch((err)=>err)
  }
    return <div>
        <div className="container" style={{"marginTop" : "80px"}}> 
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                <form className="loginform">
                    <h2>Log In</h2>
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" value={user.email} onChange={(e)=>{handlechange(e)}} name="email" />
    </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" value={user.password} onChange={(e)=>{handlechange(e)}} name="password" />
  </div>
  
  <button type="button" class="btn btn-primary" onClick={getuser}>Log In</button> <br />
   Don't Have Account ?   <button type="button" class="btn btn-warning" onClick={getResForm}>Register</button>
</form> 
<form className="resform" style={{"display" : "none"}}>
    <h2>Sign Up</h2>
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" value={user.email} onChange={(e)=>{handlechange(e)}} />
    </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" value={user.password} onChange={(e)=>{handlechange(e)}} />
  </div>
  
  <button type="button" class="btn btn-primary" onClick={registerUser}>Sign Up</button>
  </form>

                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
}