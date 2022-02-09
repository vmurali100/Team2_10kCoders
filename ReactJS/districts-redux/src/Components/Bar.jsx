import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetlogoutUser } from "../Actions";

const Bar = (props)=>{
    const {admin , loggedUser ,setLogoutFunc} = props
   
const navigate = useNavigate()

  
    const logOut =()=>{
        alert("User Logged Out .....!");
       setLogoutFunc()
      navigate('login')
    document.getElementById('userbutton').style.display = "none"
    }
 const adminPage =()=>{
     navigate("/adminlogin")
 }
    return <div>
       
      <div className="container" style={{"marginTop": "10px"}}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-2"> </div>
          <div className="col-6">{ loggedUser !=null ?<><span style={{"marginRight": "10px"}}>{loggedUser.email}</span>  <button type="button" onClick={logOut} id="userbutton">LogOut</button></> : null}
          {admin != null ?<><span style={{"marginRight": "10px"}}>{admin.email}</span>  <button type="button" onClick={logOut}>LogOut</button></> : null}
          <button type="button" onClick={adminPage}>Admin Login</button> </div>

        </div>
      </div>
   
    </div>
  }

  const MSTP =(state)=>{
      return{
       admin : state.admin ,
       loggedUser : state.loggedUser
      }
  }
  const MDTP =(dispatch)=>{
    return{
        setLogoutFunc : ()=> dispatch(SetlogoutUser())
    }
}
export default connect(MSTP ,MDTP)(Bar)