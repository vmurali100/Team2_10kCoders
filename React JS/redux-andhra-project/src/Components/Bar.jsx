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

<nav className="navbar navbar-dark bg-dark" >
  <div class="container-fluid">
    <a class="navbar-brand">Andhra Pradesh Constituency</a>
    <div className="col-6">{ loggedUser !=null ?<><span style={{"marginRight": "10px",color:"white"}}>{loggedUser.email}</span>  <button className="btn btn-primary" type="button" onClick={logOut} id="userbutton">LogOut</button></> : null}
          {admin != null ?<><span style={{marginRight: "10px"}}>{admin.email}</span>  <button type="button" onClick={logOut}>LogOut</button></> : null}
          <button type="button" className="btn btn-primary m-2" onClick={adminPage}>Admin Login</button> <button className="btn btn-primary m-2" onClick={()=>{navigate("/")}}>Home</button></div>

  </div>
</nav>
       
      {/* <div className="container" style={{"marginTop": "10px",backgroundColor:"grey",width:"100%"}}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-2"> </div>
         
        </div>
      </div> */}
   
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