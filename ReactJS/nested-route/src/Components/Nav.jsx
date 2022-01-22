import React from 'react';
import {Link} from "react-router-dom"

export const Nav = () => {
  return (
  <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
      <ul className="navbar-nav">
        <li className="nav-item active">
            <Link  className="nav-link" to="">Home</Link>
        </li>
        <li className="nav-item">
            <Link  className="nav-link" to="/students">Students</Link>
        </li>
        <li className="nav-item ">
            <Link className="nav-link" to="/about">About</Link>  
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
    </div>
  </nav>
  </div>)
  
//   <nav>
//   <Link to="">Home</Link>
//   <Link to="/students">Students</Link>
//   <Link to="/about">About</Link>
//   <Link to="/contact">Contact</Link>
// </nav>
};
