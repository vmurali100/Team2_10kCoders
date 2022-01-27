import React, { useState } from "react"; 
import axios from 'axios' ;
import {Link} from 'react-router-dom'
export const Home = ()=>{
    const [input , setInput ] = useState("") ;

   const getdistrict =()=>{
        console.log(input) ;
        axios.get('http://localhost:3000/districts').then((res)=>{
            console.log(res.data)
            // let data = res.data
          let dist =  res.data.find(d=>d.const.indexOf(input) > -1) ;
          console.log(dist.dist)
          window.alert("kindly log in to view the results") ;


        })
    }
    return <div>
        <div className="container" style={{ "marginTop" : "200px"}}>
            <h2>Enter Your constituency To Find Your District</h2>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                <label htmlFor="inputPassword5" className="form-label">Enter Your constituency</label>
                 <input type="text"  className="form-control" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                 <button type="button" onClick={getdistrict}> <Link to="login">Get District</Link></button>
                  </div>
                <div className="col-3"></div>
            </div>
        </div>
    </div>
}