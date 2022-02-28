import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../Images/prathiba-logo.webp"

export const Header = () => {

    const navigate = useNavigate();
    const [userLoggedIn, setIsUserLoggedIn] = useState(JSON.parse(localStorage.getItem("loginDetails")));
    // const EmailVerification = useSelector(state => state.registerReducer.EmailVerification);
    // console.log("Inheader comp ",EmailVerification)
    useEffect(() => {
    
        window.addEventListener('storage', () => {
          setIsUserLoggedIn(JSON.parse(localStorage.getItem("loginDetails")) || [])   
        })
    })
    
    

    const handleLogout = ()=>
    {
        localStorage.removeItem("loginDetails");
        setIsUserLoggedIn({});
        navigate("/");
    }
    return (
        <div className="wrapper">
            <div className="container cont">
                <img src={logo} alt="logo" />
                {
                    !userLoggedIn
                    &&
                    <ul className="nav justify-content-end">
                        {/* <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                }
                {
                    userLoggedIn
                    &&
                    <ul className="nav justify-content-end">
                        {/* <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}
