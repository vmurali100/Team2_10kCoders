import React, { useEffect, useState } from "react";
import axios from "axios";
const DataReceving = ()=>{
     const [use , setUse] = useState([])
    useEffect(()=>{
       axios.get("https://fakestoreapi.com/users").then((res)=> {
        const todo =res.data
        setUse(todo)
       })
     
    }, [])
    console.log(use)
    console.log(setUse)
         
 
    
    return(
        <div>
            <h1>hello world</h1>
        {use.map((x)=>{
             return <li key={x.email}>{x.email}</li>
        })}    
  
        </div>
    )
}
export default DataReceving;