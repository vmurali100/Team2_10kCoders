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
        <div style={{background:"purple" }}>
          <div className="container" style={{ marginTop: "80px", }}>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <form className="loginform">
                  <h2 style={{color:"red", fontWeight:"bold", textAlign:"center",textDecoration:"underline"}}> Admin Log In</h2>
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
                      style={{padding:"10px",margin:"10px",color:"red",fontWeight:"bold"}}
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
                      style={{padding:"10px",margin:"10px",color:"red",fontWeight:"bold"}}
                    />
                  </div>
    
                  <button type="button" style={{padding:"10px",margin:"10px",color:"",fontWeight:"bold", borderRadius:"32px"}} class="btn btn-primary" onClick={()=>AdminLogInFunc(admin , ()=>navigate("/admindashboard"))}>
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

const mapStateToProps =(state)=>{
    return {

    }
}
const mapDispatchToprops =(dispatch)=>{
    return {
        AdminLogInFunc : (admin , x)=>dispatch(AdminLogInAction(admin , x))
      
    }
}

export default connect(mapStateToProps ,mapDispatchToprops)(Admin)