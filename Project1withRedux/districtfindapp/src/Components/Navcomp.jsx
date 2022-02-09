import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navcomp = () => {
  let navigate = useNavigate()
  
  const [loggedInUser, setloggedInUser] = useState(null);
  useEffect(() => {
      let user = JSON.parse(localStorage.getItem("LoggedInUserLocalStorage"))

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
          {loggedInUser == null?<ul className="nav">
            <li className='nav-item'>
            <Link to ="/login"  className='nav-link link-dark px-2'>Login</Link>
          </li>
          <li className='nav-item'>
            <Link to="/register"  className='nav-link link-dark px-2'>Register</Link>
          </li>
          <li className='nav-item'>
            <Link to="/admin"  className='nav-link link-dark px-2'>Admin</Link>
          </li>
          </ul>:<><li className="nav-item" className='nav-link link-dark px-2'>{loggedInUser.email}</li>
                        <li className="nav-item" onClick={logOut}  className='nav-link link-dark px-2' >LogOut</li>
                    </>}
          
      </div>
    </nav>
  </div>;
};
