import React from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../index.css";

export const Header = (props) => {
    const {loggedIn,setLoggedIn} = props;
    const {adminLoggedIn,setAdminLoggedIn} = props;
    const navigate = useNavigate();
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUserDetails"));
    let username;
    // let loggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn"));
    // let adminLoggedIn = JSON.parse(localStorage.getItem("isAdminLoggedIn"));
    let logged = false;
    if(loggedIn || adminLoggedIn)
    {
        logged = true;
        username = loggedInUser.fname + loggedInUser.lname;
    }

  
    return (<div>

        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">AP New Districts Project</span>
                </a>

                {
                    !logged ? 
                    <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} id="home" aria-current="page" >Home</Link></li>
                    <li className="nav-item"><Link to="/login"  className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"} id="login" >Login</Link></li>
                    <li className="nav-item"><Link to="/register"  className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"} id="register" >Register</Link></li>
                    <li className="nav-item"><Link to="/admin-login"  className={window.location.pathname === "/admin-login" ? "nav-link active" : "nav-link"} id="admin-login" >Admin Login</Link></li>
                    </ul> 
                    : 
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a className="nav-link" >{username}</a></li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>
                            {
                                setLoggedIn(false); 
                                setAdminLoggedIn(false);  
                                localStorage.setItem("isUserLoggedIn",loggedIn);
                                localStorage.setItem("isAdminLoggedIn",adminLoggedIn)
                                localStorage.removeItem("loggedInUserDetails");
                                localStorage.removeItem("loggedInAdminDetails");
                                navigate("/")
                            }}>Logout</button>
                        </li>
                    </ul>
                }
            </header>
        </div>
    </div>);
};
