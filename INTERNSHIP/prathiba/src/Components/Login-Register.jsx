import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { emailVerification, RegisterAction } from '../Redux/Actions'



const Login = ({registers,emailVer}) => {
  let dispatch = useDispatch()
  const [display, setdisplay] = useState(true)
  const [registervals, setregistervals] = 
  useState({email:"",password:"",confirmPassword:"",name:'',number:""})
 const [logincode, setlogincode] = useState({reg_code:""})
  
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
    setdisplay(true)
  }

const handleLogIn = ()=>{
  console.log(logincode)
  dispatch(emailVer(logincode))
}

  return (
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
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder='*Email' />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' name='reg_code'
                onChange={(e)=>{var newlogincode = {...logincode}
                                newlogincode[e.target.name] = e.target.value
                                setlogincode(newlogincode)
               }}/>
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
            <button type="button" id= "b1" className="btn btn-dark"  onClick={()=>{handleLogIn()}}>Log In</button>
            <a href='#' style={{float:"right"}}> Forgot Password</a>
            </div>
          </form></div> :<div style={{ backgroundColor: "whitesmoke" }}>
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
    emailVer:emailVerification
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Login)