import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const JsonPost = () => {
    const [post, setPost] = useState(["Ervin"]);
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/posts").then((res) => {
            setPost(res.data);
        })
    }, [])
    return (
    <div>
        <h1>Json Posts</h1>
        <table>
        <thead>
            <tr>
                <th>UserId</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>

        <tbody>
            {
                post.map((obj)=>{
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
