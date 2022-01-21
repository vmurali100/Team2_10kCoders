import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Name = ()=>{
   const [todos , setTodos ]  = useState([])
   useEffect( () =>{
        axios.get('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true').then(({data})=>{
            console.log(data)
            setTodos(data)
        })
    },[])
    return <div>
      {todos.map((e)=>{
      return  <li>{e.fname}</li>
      })}
    </div>
}