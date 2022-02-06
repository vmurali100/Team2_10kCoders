import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Fake2=()=>{
  const[fake2links,setFake2links]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/carts").then((res)=>{
console.log(res.data)
setFake2links(res.data)
    })
  },[])
    return <div>
       <h2>fake2</h2>
     {fake2links.map((usr)=>{
         return <p key={usr.date}style={{textAlign:"center",marginTop:"50px"}}>{usr.date}</p>
     })}
    </div>
}