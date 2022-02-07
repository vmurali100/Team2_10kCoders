import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Bar = (props)=>{
    const {admin , loggedUser} = props
    // const [user ,setUser] = useState({});
    const [isUserLogged ,setIsUserLogged] = useState(false)
const navigate = useNavigate()
    // var localUser 
    // var localAdmin
//    useEffect(()=>{ 
//  localUser = JSON.parse(localStorage.getItem("loggedUser")) ;
//  localAdmin = JSON.parse(localStorage.getItem("loggedAdmin"));
//    setUser(localUser) 
//    setAdmin(localAdmin)
//    console.log(user)
//    ;},[])
  
    const logOut =()=>{
        // alert("User Logged Out .....!");
        // localStorage.clear();
        // navigate("/login");
        setIsUserLogged(false)
    }
  useEffect(()=>{
    if(loggedUser){
        setIsUserLogged(true)
    }else{
        setIsUserLogged(false)
    }
  },[])
 
    return <div>
       
      <div className="container" style={{"marginTop": "10px"}}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-2"> </div>
          <div className="col-6">{isUserLogged && loggedUser !=null ?<><span style={{"marginRight": "10px"}}>{loggedUser.email}</span>  <button type="button" onClick={logOut}>LogOut</button></> : null}
          {admin != null ?<><span style={{"marginRight": "10px"}}>{admin.email}</span>  <button type="button" onClick={logOut}>LogOut</button></> : null} </div>

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
        
    }
}
export default connect(MSTP ,MDTP)(Bar)