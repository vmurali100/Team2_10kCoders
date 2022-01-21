import React from 'react';
import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <a className="navbar-brand" href="#">API's</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                
                    <li className="nav-item active">
                        <a className="nav-link" ><Link to="/json-post">Json-post</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><Link to="/json-comments">Json-comments</Link></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" ><Link to="/json-albums">Json-albums</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><Link to="/json-photos">Json-Photos</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><li><Link to="/json-users">Json-Users</Link></li></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><li><Link to="/fakestore-products">FakeStore-Products</Link></li></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><li><Link to="/fakestore-carts">FakeStore-Carts</Link></li></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><li><Link to="/fakestore-users">FakeStore-Users</Link></li></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><li><Link to="/filltext-name">FillText-Name</Link></li></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><li><Link to="/filltext-persons">FillText-Persons</Link></li></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><li><Link to="/filltext-auth">FillText-Auth</Link></li></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>;
};
