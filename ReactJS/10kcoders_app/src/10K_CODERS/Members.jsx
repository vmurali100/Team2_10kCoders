import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 export const Members = ()=>{
    const [studentsdata , setStudentsdata] =  useState([])
    useEffect(()=>{
        axios.get(' http://localhost:3000/student').then(({data}) =>{
            setStudentsdata(data)
            localStorage.setItem("students" , JSON.stringify(data))
    }) ;
       

    },[])
     return <div>
         <div className="container">
             <div className="row">
         
                 <div className="col-4">
                 <h1>List Of Students</h1>
                 {studentsdata.map((e)=>{
             return <li key={e.id} style={{"textAlign" : "start" , "marginLeft" : "100px"} }><Link to={e.name}>{e.name}</Link></li>
         })}
                 </div>
                 <div className="col-4"></div>
                 <div className="col-4"></div>
             </div>
         </div>
        
        
     </div>
 }