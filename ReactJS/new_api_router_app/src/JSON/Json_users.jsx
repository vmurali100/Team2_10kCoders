import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Json_user = ()=>{
   const [todos , setTodos ]  = useState([])
   useEffect( () =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>{
            console.log(data)
            setTodos(data)
        })
    },[])
    return <div>
      {todos.map((e)=>{
      return  <li>{e.email}</li>
      })}
    </div>
}