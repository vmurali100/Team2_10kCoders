import React, { useEffect, useState } from "react";
import axios from 'axios' ;
import {Link} from 'react-router-dom'

export const Navbar =()=>{
    const [ navdata , setNavdata ] = useState([]) ;
    useEffect(()=>{
  axios.get(' http://localhost:3000/navbar').then(({data})=>{
      setNavdata(data) ;
  })
    } , [])
    return <div>
      <div className="container-fluid" style={{"backgroundColor" : "lightcyan" , "height" : "80px"  , "padding" : "20px"}}>
          <div className="row" >
              <div className="col-3"> <h3>FOOD DELIVERY APP</h3></div>
              <div className="col-4"></div>
              <div className="col-5">
              {navdata.map((nav)=>{
           return <Link to={nav}><span style={{"marginLeft" : "15px" , "textTransform" : "uppercase"}}>{ nav != "home" ? nav : nav }</span></Link>
       })}
              </div>
          </div>
      </div>
    </div>
}