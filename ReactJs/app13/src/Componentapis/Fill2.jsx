import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Fill2=()=>{
  const[fill2links,setFill2links]=useState([])
  useEffect(()=>{
    axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").then((res)=>{
console.log(res.data)
setFill2links(res.data)
    })
  },[])
    return <div>
       <h2>fill2</h2>
     {fill2links.map((usr)=>{
         return <p key={usr.tel}style={{textAlign:"center",marginTop:"50px"}}>{usr.tel}</p>
     })}
    </div>
}