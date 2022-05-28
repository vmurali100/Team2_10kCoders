import React, { useState } from 'react'
import{Routes,Route, Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
export const Navcomp = () => {
    let navigate=useNavigate()
    const[loggedinuser,setloggedinuser]=useState(null)
    useEffect(()=>{
        let user=JSON.parse(localStorage.getItem("loggedinuser"))
        setloggedinuser(user)
      },[])
      const logout=()=>{
          alert("user loggedout")
          navigate("/")
          localStorage.clear()
      }
  return (
    <div>
  <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2 active" aria-current="page"></a></li>
            
          </ul>
          <ul className="nav">
          {
              loggedinuser==null?<>
              <li className="nav-item">
                <Link to="/login" className="nav-link link-dark px-2">login</Link>
                </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link link-dark px-2">register</Link>
  
                </li>
                <li className="nav-item">
                <Link to="/admin" className="nav-link link-dark px-2">admin</Link>
  
                </li> </>:<><li className="nav-link link-dark px-2" >{loggedinuser.username}</li>
                  <li className="nav-item"  onClick={logout} classNamee="nav-link link-dark px-2" > 
                logout
                  </li></>
          }
                     </ul>
 
        </div>
      </nav>      
    </div>
  )
}
