import axios from "axios";
import React, { useEffect, useState }  from "react";
import {Link} from 'react-router-dom' ; 

export const Navbar = ()=>{

    const [navdata , setNavdata] = useState([]) ; 
    useEffect(()=>{
        axios.get(" http://localhost:3000/nav").then(({data})=>{
            setNavdata(data)
        })
    },[])
    return <div>
      {console.log(navdata)}
           <header className="header">
      <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="navbar">
        <div className="container"><a className="navbar-brand" href="index.html"><img src="img/hgold.jpg" alt="" width="65" height='50' style={{backgroundColor : "blue"}} /></a>
          <button className="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
            {navdata.map((nav)=>{
                return  <li className="nav-item"><a className="nav-link text-uppercase active" ><Link to={`/${nav}`}>{nav}</Link></a></li>
            })}
             
              {/* <li className="nav-item"><a className="nav-link text-uppercase" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#expertise">Expertise</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#experience">Experience</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#contact">Contact</a></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </div>
}