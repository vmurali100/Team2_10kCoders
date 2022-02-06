import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Json4=()=>{
  const[json4links,setJson4links]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res)=>{
console.log(res.data)
setJson4links(res.data)
    })
  },[])
    return <div>
      <h2>json4</h2>
     {json4links.map((pht)=>{
        return <p key={pht.url}><center><img style={{width:"150px",height:"150px",marginTop:"100px"}} src={pht.url}/></center></p>

     })}
    </div>
}