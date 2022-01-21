import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const JsonUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
            setUsers(res.data);
        })
    }, [])
    return (
    <div>
        <h1>Json Users</h1>
        <table className="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
            </tr>
        </thead>

        <tbody>
            {
                users.map((obj)=>{
                    console.log(obj)
                    return <tr>
                        {
                            Object.keys(obj).filter(o => o !== "id" && o !== "address" && o !== "company").map((key)=>
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
