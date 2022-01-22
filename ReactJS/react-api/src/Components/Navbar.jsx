import React from 'react';
import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <a className="navbar-brand" href="#">React Router API's</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">

                <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">JSON Placeholder</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown10">
                            <Link className="dropdown-item" to="/json-post">Json-post</Link>
                            <Link className="dropdown-item" to="/json-comments">Json-comments</Link>
                            <Link className="dropdown-item" to="/json-albums">Json-albums</Link>
                            <Link className="dropdown-item" to="/json-photos">Json-Photos</Link>
                            <Link className="dropdown-item" to="/json-users">Json-Users</Link>
                            <Link className="dropdown-item" to="/json-todos">Json-Todos</Link>
                        </div>
                </li>
                <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fake Store</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown10">
                            <Link className="dropdown-item" to="/fakestore-products">FakeStore-Products</Link>
                            <Link className="dropdown-item" to="/fakestore-carts">FakeStore-Carts</Link>
                            <Link className="dropdown-item" to="/fakestore-users">FakeStore-Users</Link>
                        </div>
                </li>
                <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fill Text</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown10">
                            <Link className="dropdown-item" to="/filltext-name">FillText-Name</Link>
                            <Link className="dropdown-item" to="/filltext-persons">FillText-Persons</Link>
                            <Link className="dropdown-item" to="/filltext-auth">FillText-Auth</Link>
                        </div>
                </li>
                </ul>
            </div>
        </nav>
    </div>;
};
