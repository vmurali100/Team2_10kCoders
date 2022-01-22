import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 export const MembersDetails = ()=>{
    const [name , setName]  = useState([])
    let params = useParams()
    useEffect(()=>{
  
    var alldata = JSON.parse(localStorage.getItem("students")) ;
    var newstd =  alldata.find(
        (d)=>  d.name === params.student 
     ) ;
    console.log(params) ;
    setName(newstd)   
    },[])
     return <div>
         <h1>hey welcome to the MembersDetails </h1>
         {name.id} <br />
        {name.name} <br />
        {name.address}
     </div>
 }