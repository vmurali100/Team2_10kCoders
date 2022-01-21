import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Photos = ()=>{
   const [todos , setTodos ]  = useState([])
   useEffect( () =>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then(({data})=>{
            console.log(data)
            setTodos(data)
        })
    },[])
    return <div>
      {todos.map((e)=>{
      return  <div><img src={e.url} alt="" width="100px" height="100px" /></div>
      })}
    </div>
}