import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/prathiba-logo.webp"

export const Header = () => {
    return (
        <div className="wrapper">
            <div className="container cont">
                <img src={logo} alt="logo" />
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
