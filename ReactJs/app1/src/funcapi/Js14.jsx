import React, { useState,useEffect } from "react";

import axios from "axios";
export const Js14=()=>{
    const[albums,setAlbums]=useState([]);
    useEffect(()=>{
        let aURL="https://jsonplaceholder.typicode.com/albums"
        axios.get(aURL).then(({data})=>{
            console.log(data);
            setAlbums(data);
        });
    },[])
    const handleDelete=(album )=>{
        console.log(album);
        let balanceAlbums=albums.filter((albm)=>albm.id!==album.id);
        setAlbums(balanceAlbums);
    }
    return(
        <div>
            <h2>albums</h2>
            <ul>
                {albums.map((album)=>{
                    return(
<li>
    {album.title}
    <button onClick={()=>{
        handleDelete(album);
    }}
    >delete title
    </button>
    </li>
                    );
                })}
            </ul>
        </div>
    )
}