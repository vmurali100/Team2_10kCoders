import React from 'react';
import { Link } from "react-router-dom"

export const Header = (props) => {
    const {loggedIn, setLoggedIn} = props;
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUserDetails"));
    let username
    if(loggedInUser == null) {
        loggedInUser = [];
    }
    else{
        username = loggedInUser.fname + loggedInUser.lname;
    }
    return (<div>

        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">AP New Districts Project</span>
                </a>

                {
                    !loggedIn ? 
                    <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/"  className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to="/login"  className="nav-link">Login</Link></li>
                    <li className="nav-item"><Link to="/register"  className="nav-link">Register</Link></li>
                    </ul> 
                    : 
                    <ul className="nav nav-pills">
                    <li className="nav-item"><a className="nav-link" >{username}</a></li>
                    <li className="nav-item"><button className="nav-link" onClick={()=>{setLoggedIn(false)}}>Logout</button></li>
                    </ul>
                }
            </header>
        </div>
    </div>);
};
