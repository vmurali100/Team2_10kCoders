import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Json3=()=>{
  const[json3links,setJson3links]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res)=>{
console.log(res.data)
setJson3links(res.data)
    })
  },[])
    return <div>
       <h2>json3</h2>
     {json3links.map((albm)=>{
         return <p key={albm.title}style={{textAlign:"center",marginTop:"50px"}}>{albm.title}</p>
     })}
    </div>
}