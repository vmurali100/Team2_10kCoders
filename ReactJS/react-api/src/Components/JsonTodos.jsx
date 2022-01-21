import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const JsonTodos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/todos").then((res) => {
            setTodos(res.data);
        })
    }, [])
    return (
    <div>
        <h1>Json Todos</h1>
        <table className="table">
        <thead>
            <tr>
                <th>UserId</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
        </thead>

        <tbody>
            {
                todos.map((obj)=>{
                    return <tr>
                        {
                            
                            Object.keys(obj).filter(o => o !== "id").map((key)=>
                            {
                                {/* {console.log(obj[key])} */}
                                return <td key={obj[key]}>{obj[key]}</td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
    </div>);

};
