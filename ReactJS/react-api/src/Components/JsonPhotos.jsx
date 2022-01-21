import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const JsonPhotos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/photos").then((res) => {
            setPhotos(res.data);
        })
    }, [])
    return (
    <div>
        <h1>Json Albums</h1>
        <table>
        <thead>
            <tr>
                <th>AlbumId</th>
                <th>Title</th>
                <th>URL</th>
                <th>TumbnailURL</th>
            </tr>
        </thead>

        <tbody>
            {
                photos.map((obj)=>{
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
