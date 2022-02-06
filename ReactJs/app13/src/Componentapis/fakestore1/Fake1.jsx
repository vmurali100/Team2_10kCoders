import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Fake1=()=>{
  const[fake1links,setFake1links]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
console.log(res.data)
setFake1links(res.data)
    })
  },[])
    return <div>
       <h2>fake1</h2>
     {fake1links.map((usr)=>{
               return <p key={usr.image}><center><img style={{width:"150px",height:"150px",marginTop:"100px"}} src={usr.image}/></center></p>

     })}
    </div>
}