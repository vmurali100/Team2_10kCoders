import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Todos = () => {
    const [todo, settodos] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/todos" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            settodos(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fake Store API<span style={{color:'green'}}>"Todos"</span></h1>

    {todo.map((todos)=>{
         return <li key={todo}><span style={{color:'red', font:'italic'}}>Title:  </span>{todos.title}</li>
       })}
    </ol>
   </div>
}