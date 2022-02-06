import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Fill3=()=>{
  const[fill3links,setFill3links]=useState([])
  useEffect(()=>{
    axios.get("http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then((res)=>{
console.log(res.data)
setFill3links(res.data)
    })
  },[])
    return <div>
       <h2>fill3</h2>
     {fill3links.map((usr)=>{
         return <p key={usr.password}style={{textAlign:"center",marginTop:"50px"}}>{usr.password}</p>
     })}
    </div>
}