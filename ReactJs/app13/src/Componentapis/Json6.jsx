import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Json6=()=>{
  const[json6links,setJson6links]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
console.log(res.data)
setJson6links(res.data)
    })
  },[])
    return <div>
       <h2>json6</h2>
     {json6links.map((usr)=>{
         return <p key={usr.email}style={{textAlign:"center",marginTop:"50px"}}>{usr.email}</p>
     })}
    </div>
}