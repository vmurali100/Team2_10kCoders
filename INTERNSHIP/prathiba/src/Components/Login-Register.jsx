import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { emailVerification, logInAction, RegisterAction, userInfoAction } from '../Redux/Actions'



const Login = ({state1,registers,emailVer,logIn,userInfo}) => {
  let dispatch = useDispatch()
  const [display, setdisplay] = useState(true)
  const [registervals, setregistervals] = 
  useState({email:"",password:"",confirmPassword:"",name:'',number:""})
  const [emailverdispaly, setemailverdispaly] = useState(false)
 const [logincode, setlogincode] = useState("")
 const [loginvals, setloginvals] = useState({email:"",password:""})
  
  const handleChange = (e)=>{
    let newregistervals = {...registervals}
    for(var a in registervals){
      if(a==e.target.name){
        newregistervals[e.target.name] = e.target.value
        setregistervals(newregistervals)
      }
    }
  }

  const handleSubmit = async()=>{
    console.log(registervals)
    await dispatch(registers(registervals))
    alert("Registration Sucessful")
    setemailverdispaly(true)
  }

  //Email Verification Code
const handlecode = ()=>{
  console.log(logincode)
  dispatch(emailVer(logincode))
  setemailverdispaly(false)
  setdisplay(true)
}

//Handling LOGIN FORM VALUES
const handleLogInChange = (e)=>{
  var newloginvals = {...loginvals}
  newloginvals[e.target.name] = e.target.value
  setloginvals(newloginvals)
}

const handleLogIn = async()=>{
  await dispatch(logIn(loginvals))
}

const handleUser = ()=>{
  var profilevals = state1
  dispatch(userInfo(profilevals))
}

  return (
    <div>
      {emailverdispaly?<div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
          <form>
  <div class="mb-3">
    <input type="email" className="form-control"  placeholder='Enter Your Code' 
    onChange={(e)=>{setlogincode(e.target.value)}}/>
  </div>
   <button type="button" className="btn btn-primary" onClick={()=>{handlecode()}}>Check Code</button></form>
          </div>
          <div className="col"></div>
        </div>
      </div>:   

   <div style={{ padding: "10px 50px 0px 50px" }}>
      <div style={{ padding: "5px 50px 0px 50px" }}>
        <div style={{ padding: "5px 50px 0px 200px" }}>
          <nav className="navbar sticky-top navbar-light bg-light">
            <div >
              <button id='blc' style={{ float: "left" }}><h2 onClick={() => { setdisplay(true) }}>LogIn</h2></button>
              <button id='blc' style={{ float: "left" }}><h2 onClick={() => { setdisplay(false) }}>Register</h2></button>
            </div>
          </nav>
          {display ?<div style={{ backgroundColor: "whitesmoke" }}>
            <h2>LOGIN FORM</h2>
            <form style={{padding:"0px 30px 0px 30px"}}>
            <div className="mb-3" >
              <input type="email" className="form-control"  placeholder='*Email' name="email"
              onChange={(e)=>{handleLogInChange(e)}} />
            </div>
            <div className="mb-3">
              <input type="" className="form-control"  placeholder='Password' name="password" 
              onChange={(e)=>{handleLogInChange(e)}}/>
            </div>
            <div className="mb-3 form-check" > 
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1" style={{float:"left"}}>Remember me</label>
            </div>
            <div className="mb-3 form-check" >
              <a href='#' style={{float:"left"}}> ResendEmailVerfication</a>
              <a href='#' style={{float:"right"}}>Reset</a>
               </div>
               <div className="mb-3 form-check">
            <button type="button" id= "b1" className="btn btn-dark" onClick={handleLogIn}>LogIn</button>
            <button type="button"  className="btn btn-primary" onClick={handleUser}>GetUserINFO</button>
            <a href='#' style={{float:"right"}}> Forgot Password</a>
            </div>
          </form></div> :
          
          <div style={{ backgroundColor: "whitesmoke" }}>
            <h2>Register Form</h2>
            <form style={{padding:"0px 30px 0px 30px"}}> 
          
          <div className="mb-3" >
              <input type="email" className="form-control" placeholder='*Email'  name='email'
              onChange={(e)=>{handleChange(e)}}/>
            </div>
            <div className="mb-3" >
              <input type="text" className="form-control"  placeholder='*Name'  name='name'
              onChange={(e)=>{handleChange(e)}}/>
            </div>
            <div className="mb-3" > 
              <input type="" className="form-control" placeholder='*Password'  name='password'
              onChange={(e)=>{handleChange(e)}}/>
            </div>
            <div className="mb-3" > 
              <input type="" className="form-control" placeholder='*ConfirmPassword'  name='confirmPassword'
              onChange={(e)=>{handleChange(e)}}/>
            </div>
            <div className="mb-3" >
              <input type="text" className="form-control"  placeholder='*MobileNumber' name='number'
              onChange={(e)=>{handleChange(e)}}/>
            </div>
            <button type="button" className="btn btn-primary" style={{border:"1px solid black"}}
                onClick={handleSubmit}>Submit</button>

          </form></div>  }
        </div>
      </div>
    </div>}
    </div>
  )
}
const mapStateToProps = (state)=>{
  return {
    state1:state
  }
}

const mapDispatchToProps = ()=>{
  return{
    registers:RegisterAction,
    emailVer:emailVerification,
    logIn:logInAction,
    userInfo:userInfoAction
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Login)