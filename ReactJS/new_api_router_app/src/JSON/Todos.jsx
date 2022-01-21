import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Todos = ()=>{
   const [todos , setTodos ]  = useState([])
   useEffect( () =>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(({data})=>{
            console.log(data)
            setTodos(data)
        })
    },[])
    return <div>
      {todos.map((e)=>{
      return  <li>{e.title}</li>
      })}
    </div>
}