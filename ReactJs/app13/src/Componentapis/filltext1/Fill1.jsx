import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Fill1=()=>{
  const[fill1links,setFill1links]=useState([])
  useEffect(()=>{
    axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true").then((res)=>{
console.log(res.data)
setFill1links(res.data)
    })
  },[])
    return <div>
       <h2>fill1</h2>
     {fill1links.map((usr)=>{
         return <p key={usr.fname}style={{textAlign:"center",marginTop:"50px"}}>{usr.fname}</p>
     })}
    </div>
}