import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const FakeStoreUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/users").then((res) => {
            setUsers(res.data);
        })
    }, [])
    return (
    <div>
        <h1>Fake Store Users</h1>
        <table className="table">
        <thead>
            <tr>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Phone</th>
            </tr>
        </thead>

        <tbody>
            {
                users.map((obj)=>{
                    return <tr>
                        {
                            Object.keys(obj).filter(o => o !== "id" && o !== "address" && o !== "name" && o !== "__v").map((key)=>
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
