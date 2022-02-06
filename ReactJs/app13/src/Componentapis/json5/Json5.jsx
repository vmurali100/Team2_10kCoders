import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Json5=()=>{
  const[json5links,setJson5links]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
console.log(res.data)
setJson5links(res.data)
    })
  },[])
    return <div>
       <h2>json5</h2>
     {json5links.map((todo)=>{
         return <p key={todo.title}style={{textAlign:"center",marginTop:"50px"}}>{todo.title}</p>
     })}
    </div>
}