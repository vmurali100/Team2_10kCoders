import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Json1=()=>{
  const[json1links,setJson1links]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
console.log(res.data)
setJson1links(res.data)
    })
  },[])
    return <div>
       <h2>json1</h2>
     {json1links.map((pst)=>{
         return <p key={pst.title}style={{textAlign:"center",marginTop:"50px"}}>{pst.title}</p>
     })}
    </div>
}