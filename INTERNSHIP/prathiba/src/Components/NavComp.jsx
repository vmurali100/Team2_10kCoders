import React from 'react'
import { Link } from 'react-router-dom'

export const NavComp = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-dark"  style={{padding:"5px 180px 5px 150px"}}>
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"white"},{float:"left"}} >
      <img src="https://e-prathibha.com/img/logo.webp" alt="" width="220" height="70" class="d-inline-block align-text-top" />
    </a>
  </div>
      <ul className="navbar-nav me-auto mb-1 mb-lg-0" >
        <li className="nav-item">
          <Link to={"/homepage"} className="nav-link" style={{color:"white"}}>Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:"white"}}>Packages</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/"}  style={{color:"white"}}>Register/Login</Link>
          
        </li>
    
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}
