import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getaction } from "../Actions";

const User = (props) => {
  const [user ,setUser] = useState({
      username : " " , 
      password : " "
  })

  const handlechange =(e)=>{
    var newUser = {...user} ;
       newUser[e.target.name] = e.target.value ;
       setUser(newUser)
  }
  const getdata =()=>{
    // var newUser = {...user} ;
    // newUser[e.target.name] = e.target.value ;
    console.log(user)
    localStorage.setItem ("user" , JSON.stringify(user))
   
  }
  
console.log(props)
  return (
    <div >
     <div className="container" style={{"marginTop" : "150px"}}>
         <div className="row">
             <div className="col-4"></div>
             <div className="col-4"> 
             <form>
                 <h1><strong>Log In Form</strong></h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
           Username
          </label>
          <input style={{"width" : "300px" , "margin" : " 0 auto"}}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            name="username"
            onChange={(e)=>handlechange(e)}
          />
        </div>
        <div className="mb-3" style={{"marginTop": " 50px"}}>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input style={{"width" : "300px" , "margin" : "  auto"}}
            type="password"
            className="form-control"
            id="password" name="password"   onChange={(e)=>handlechange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button> 
        <button type="button" className="btn btn-warning" style={{"marginLeft" : " 50px"}} onClick={()=>getdata() / props.getuserdata() } >
         <Link to="username"> Log In</Link>
        </button>
      </form></div>
             <div className="col-4"></div>
         </div>
     </div>
    </div>
  );
};

const  MDTP =(dispatch)=>{
  return {
    getuserdata : ()=>(dispatch(getaction()))
  }

}
const MSTP =(state) =>{
  return {
    user : state.user
  }
}

export default connect(MSTP ,MDTP)(User)
