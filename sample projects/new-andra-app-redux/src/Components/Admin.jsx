import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminLogInAction } from "../Actions";

const Admin = (props)=>{
    const navigate =useNavigate()
    const {AdminLogInFunc} = props
    const[admin ,setAdmin] = useState({
        email : "" ,
        password : "",
    })
    const handlechange = (e) => {
        let newuser = { ...admin };
        newuser[e.target.name] = e.target.value;
        setAdmin(newuser);
      };
    return (
        <div>
          <div className="container" style={{ marginTop: "80px" }}>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <form className="loginform">
                  <h2> Admin Log In</h2>
                  <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      value={admin.email}
                      onChange={(e) => {
                        handlechange(e);
                      }}
                      name="email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      value={admin.password}
                      onChange={(e) => {
                        handlechange(e);
                      }}
                      name="password"
                    />
                  </div>
    
                  <button type="button" class="btn btn-primary" onClick={()=>AdminLogInFunc(admin , ()=>navigate("/admindashboard"))}>
                    Log In
                  </button>
                </form>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
      );
    
}

const  MSTP =(state)=>{
    return {

    }
}
const MDTP =(dispatch)=>{
    return {
        AdminLogInFunc : (admin , x)=>dispatch(AdminLogInAction(admin , x))
      
    }
}

export default connect(MSTP ,MDTP)(Admin)