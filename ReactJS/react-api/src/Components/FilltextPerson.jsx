import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const FilltextPerson = () => {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").then((res) => {
            setPerson(res.data);
        })
    }, [])
    return (
    <div>
        <h1>FillText Person</h1>
        <table className="table">
        <thead>
            <tr>
                <th>Fname</th>
                <th>Lname</th>
                <th>Tel</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>zip</th>
            </tr>
        </thead>

        <tbody>
            {
                person.map((obj)=>{
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
