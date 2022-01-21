import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const JsonComments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/comments").then((res) => {
            setComments(res.data);
        })
    }, [])
    return (
    <div>
        <h1>Json Comments</h1>
        <table className="table">
        <thead>
            <tr>
                <th>PostId</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
        </thead>

        <tbody>
            {
                comments.map((obj)=>{
                    return <tr>
                        {
                            Object.keys(obj).filter(o => o !== "id").map((key)=>
                            {
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
