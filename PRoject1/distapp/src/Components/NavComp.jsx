import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom"

export const NavComp = () => {
    let navigate = useNavigate()

    const [loggedInUser, setloggedInUser] = useState(null);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("loggedInUser"))
        setloggedInUser(user)
    }, []);

    const logOut = ()=>{
        localStorage.clear()
        navigate("/")
        alert("User Logged Out")
    }
    return <div>
        <nav className="py-2 bg-light border-bottom">
            <div className="container d-flex flex-wrap">
                <ul className="nav me-auto">

                </ul>
                <ul className="nav">
                    {loggedInUser == null ? <>
                        <li className="nav-item">
                            {/* <a href="#" className="nav-link link-dark px-2">Login</a> */}
                            <Link to="/login" className='nav-link link-dark px-2'>Login</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a href="#" className="nav-link link-dark px-2">Sign up</a> */}
                            <Link to="register" className='nav-link link-dark px-2'>Register</Link>
                        </li>
                    </> : <><li className="nav-item" className='nav-link link-dark px-2'>{loggedInUser.username}</li>
                        <li className="nav-item" onClick={logOut}  className='nav-link link-dark px-2' >LogOut</li>
                    </>}
                </ul>
            </div>
        </nav>
    </div>;
};
