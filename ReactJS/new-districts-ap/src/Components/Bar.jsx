import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Bar = ()=>{
    const [user ,setUser] = useState({});
    const [admin ,setAdmin] = useState({})
const navigate = useNavigate()
    var localUser 
    var localAdmin
   useEffect(()=>{ 
 localUser = JSON.parse(localStorage.getItem("loggedUser")) ;
 localAdmin = JSON.parse(localStorage.getItem("loggedAdmin"));
   setUser(localUser) 
   setAdmin(localAdmin)
   console.log(user)

   
   ;},[])
  
    const logOut =()=>{
        alert("User Logged Out .....!");
        localStorage.clear();
        navigate("/login");
    }
 
    return <div>
       
      <div className="container" style={{"marginTop": "10px"}}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-2"> </div>
          <div className="col-6">{user !=null ?<><span style={{"marginRight": "10px"}}>{user.email}</span>  <button type="button" onClick={logOut}>LogOut</button></> : null}
          {admin != null ?<><span style={{"marginRight": "10px"}}>{admin.email}</span>  <button type="button" onClick={logOut}>LogOut</button></> : null} </div>

        </div>
      </div>
   
    </div>
  }