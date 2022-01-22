import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Json2=()=>{
  const[json2links,setJson2links]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
console.log(res.data)
setJson2links(res.data)
    })
  },[])
    return <div>
       <h2>json2</h2>
     {json2links.map((cmnt)=>{
         return <p key={cmnt.body}style={{textAlign:"center",marginTop:"50px"}}>{cmnt.body}</p>
     })}
    </div>
}