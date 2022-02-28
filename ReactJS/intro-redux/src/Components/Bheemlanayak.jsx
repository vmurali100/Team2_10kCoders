import axios from "axios";
import React, { useEffect, useState } from "react";

const Bheemlanayak = ()=>{
    const [todo ,setTodo] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
               const retrive = res.data
               setTodo(retrive)
        })
      
       
    })
    return(
        <div>
            <h1>hello world</h1>
            {todo.map((eve)=>{
                  return <h1 key={eve.id}>
                      {eve.email}
                  </h1>
             })}
            
           
        </div>
    )
}
export default Bheemlanayak;