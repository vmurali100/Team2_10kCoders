import React,{useState,useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

export const Nav = () => {
  const [loggedInUser, setloggedInUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    setloggedInUser(user);
    
  }, []);

  const logout = ()=>{
      alert("User Logged Out ..")
      navigate("/")
    localStorage.clear()
  }
  return (
    <div>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-dark px-2 active"
                aria-current="page"
              ></a>
            </li>
          </ul>
          <ul className="nav">
          {
              loggedInUser==null ? 
              <><li className="nav-item">
              <Link to="/login" className="nav-link link-dark px-2">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link link-dark px-2">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link link-dark px-2">
                Admin Login
              </Link>
            </li>
            </>:<>
            <li className="nav-link link-dark px-2">{loggedInUser.username}</li>
            <li className="nav-item" onClick={logout} className="nav-link link-dark px-2">
                Logout
            </li></>
            
           
          }
          </ul>
        </div>
      </nav>
    </div>
  );
};
