import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FunctionalComponent7() {
    const [todos,settodos] = useState([])
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/todos"
        axios.get(URL).then(({data})=>{
            settodos(data)
        })
    },[])

    return(
        <div>
            <h1>FUNCTIONAL COMPONENT 7</h1>
            <ul>
                {todos.map((todo)=>
                <li key={todo.id}>{todo.id}</li>    
                )}
            </ul>
        </div>
    )
}
