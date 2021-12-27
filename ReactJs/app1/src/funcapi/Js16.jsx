import React, { useState,useEffect } from "react";

import axios from "axios";
export const Js16=()=>{
    const[todos,setTodos]=useState([]);
    useEffect(()=>{
        let tURL="https://jsonplaceholder.typicode.com/todos"
        axios.get(tURL).then(({data})=>{
            console.log(data);
            setTodos(data);
        });
    },[])
    const handleDelete=(todo)=>{
        console.log(todo);
        let balanceTodos=todos.filter((tdt)=>tdt.id!==todo.id);
        setTodos(balanceTodos);
    }
    return(
        <div>
            <h2>todos</h2>
            <ul>
                {todos.map((todo)=>{
                    return(
<li>
    {todo.title}
    <button onClick={()=>{
        handleDelete(todo);
    }}
    >delete todo
    </button>
    </li>
                    );
                })}
            </ul>
        </div>
    )
}