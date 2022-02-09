import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../App.css";
import "../index.css";
import { UserLogoutAction } from "../Redux/Actions";

const Navbar = (props) => {
const [loggeduser ,setLoggeduser] = useState({});
const navigate =useNavigate()

console.log(props)
useEffect(()=>{
//  setLoggeduser(JSON.parse(localStorage.getItem("loggeduser")))

},[]);
const logOutUser =()=>{
  props.logOutFunc()
}
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container">
              <div className="col-1">
                <a class="navbar-brand" href="#" style={{ color: "white" }}>
                  PRATHIBHA
                </a>
              </div>

              <div className="col-5"></div>
              <div className="col-7">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        style={{ color: "white" }}
                        aria-current="page"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-house-door-fill"
                          viewBox="0 0 16 16"
                          color="white"
                        >
                          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                        </svg>{" "}
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        style={{ color: "white" }}
                        href="#"
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-cart3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>{" "}
                        Packages
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        style={{ color: "white" }}
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>{" "}
                        { props.loggeduser[1] !=null ? props.loggeduser[1].email : <Link to="register">Login/Register</Link>}
                       
                      </a>
                    </li>
                   { props.loggeduser[1] !=null  && <li><button onClick={()=> logOutUser() / navigate('')}>LogOut</button></li> }
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
const MSTP =(state)=>{
  return {
      loggeduser : state
  }
}
const MDTP =(dispatch)=>{
  return {
    logOutFunc : ()=>dispatch(UserLogoutAction())
  }
}
export default connect(MSTP ,MDTP)(Navbar);

export const ContactHeader = () => {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ height: "40px", padding: "8px", backgroundColor: "gray" }}
      >
        <a
          style={{
            marginRight: "15px",
            onmouseover: "orange",
            cursor: "pointer",
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          9999999999
        </a>
        <a style={{ marginRight: "15px", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          e-prathibha@gmail.com
        </a>
        <a style={{ marginRight: "15px", cursor: "pointer" }}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          facebook
        </a>
      </div>
    </div>
  );
};



export const Footer = () => {
  return (
    <div>
      <div className="container-fluid" >
        <div className="row" id="footer-font" style={{backgroundColor: "black" , height : "50px" , padding: " 5px"}}>
          <div className="col-5">
            <span>About</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Desclimer</span>
            <span>Feedback</span>
            <span>Contact Us</span>
            <span>Refund</span>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            Copyright 2022 E-prathibha
          </div>
          <div className="col-1"></div>
          <div className="col-3">Poweredby: <a href="#">Errortechnologies.com</a></div>
        </div>
      </div>
    </div>
  );
};
