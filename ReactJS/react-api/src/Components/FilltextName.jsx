import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const FilltextName = () => {
    const [name, setName] = useState([]);
    useEffect(() => {
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true").then((res) => {
            setName(res.data);
        })
    }, [])
    return (
    <div>
        <h1>FillText Name</h1>
        <table className="table">
        <thead>
            <tr>
                <th>Fname</th>
                <th>Lname</th>
            </tr>
        </thead>

        <tbody>
            {
                name.map((obj)=>{
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
