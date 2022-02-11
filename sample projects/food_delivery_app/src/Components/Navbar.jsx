import React, { useEffect, useState } from "react";
import axios from 'axios' ;
import {Link} from 'react-router-dom'

export const Navbar =()=>{
    const [ navdata , setNavdata ] = useState([]) ;
    useEffect(async()=>{
 await axios.get('http://localhost:3000/navbar').then(({data})=>{
    
      console.log(data)
      setNavdata(data) ;
     
  })
  console.log(navdata)
    } , [])
    return <div>
      <div className="container-fluid" style={{ "backgroundColor": "lightcyan" ,  "height" : "80px"  , "padding" : "20px"}}>
          <div className="row" >
              <div className="col-3"> <h3>FOOD DELIVERY APP</h3></div>
              <div className="col-4"></div>
              <div className="col-5">
              {navdata != null ? navdata.map((nav)=>{
         return <span style={{marginLeft : "10px"}}><Link to={nav}>{nav}</Link></span>
       }) : ""}
              </div>
          </div>
      </div>
    </div>
}