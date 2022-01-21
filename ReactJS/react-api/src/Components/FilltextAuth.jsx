import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const FilltextAuth = () => {
    const [auth, setAuth] = useState([]);
    useEffect(() => {
        axios.get("http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then((res) => {
            setAuth(res.data);
        })
    }, [])
    return (
    <div>
        <h1>FillText Auth</h1>
        <table className="table">
        <thead>
            <tr>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
            </tr>
        </thead>

        <tbody>
            {
                auth.map((obj)=>{
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
