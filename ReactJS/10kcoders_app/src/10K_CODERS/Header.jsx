import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
 export const Header  =()=>{
    const[codersdata , setData] = useState([]) ;

    useEffect(()=>{
        axios.get("http://localhost:3000/header").then(({data}) => {setData(data)})
    },[])
     return <div>
       <div className="container">
           <div className="row" style={{ "backgroundColor" : "gray" , "marginBottom": "30px"}}>
            
          <div className="col-3">   <h1 style={{"color" : "goldenrod" ,}}>10K CODERS </h1></div>
         
         <div className="col-2"></div>
          <div className="col-7" style={{"marginTop" : "20px"}}>     {codersdata.map((e)=>{
                   return  <h5 key={e} style={{"display": "inline" , "marginLeft" : "20px" , }}> <Link to={e}>{e}</Link></h5>

               })}</div>
           </div>
       </div>
     </div>
 }