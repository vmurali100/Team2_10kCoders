import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Fake3=()=>{
  const[fake3links,setFake3links]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/users").then((res)=>{
console.log(res.data)
setFake3links(res.data)
    })
  },[])
    return <div>
       <h2>fake3</h2>
     {fake3links.map((usr)=>{
         return <p key={usr.email}style={{textAlign:"center",marginTop:"50px"}}>{usr.email}</p>
     })}
    </div>
}