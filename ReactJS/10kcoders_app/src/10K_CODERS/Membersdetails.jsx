import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 export const MembersDetails = ()=>{
    const [name , setName]  = useState([])
    let params = useParams()
    useEffect(()=>{
    axios.get(' http://localhost:3000/student').then(({data})=> {
        console.log (data)
       setName(newstd)
    })
    var newstd =  data.find(d=>{ d.name == params.student  })
    console.log(params)
    setName(newstd)   
    },[])
     return <div>
         <h1>hey welcome to the MembersDetails </h1>
         {name.map((e)=>
         {
             return <h1>{e.name}</h1>
         })}
     </div>
 }