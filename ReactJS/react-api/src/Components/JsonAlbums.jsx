import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const JsonAlbums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/albums").then((res) => {
            setAlbums(res.data);
        })
    }, [])
    return (
    <div>
        <h1>Json Albums</h1>
        <table>
        <thead>
            <tr>
                <th>UserId</th>
                <th>Title</th>
            </tr>
        </thead>

        <tbody>
            {
                albums.map((obj)=>{
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
