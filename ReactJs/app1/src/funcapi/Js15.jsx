import React, { useState,useEffect } from "react";

import axios from "axios";
export const Js15=()=>{
    const[photos,setPhotos]=useState([]);
    useEffect(()=>{
        let phURL="https://jsonplaceholder.typicode.com/photos"
        axios.get(phURL).then(({data})=>{
            console.log(data);
            setPhotos(data);
        });
    },[])
    const handleDelete=(photo )=>{
        console.log(photo);
        let balancePhotos=photos.filter((pht)=>pht.id!==photo.id);
        setPhotos(balancePhotos);
    }
    return(
        <div>
            <h2>photos</h2>
            <ul>
                {photos.map((photo)=>{
                    return(
<li>
    <img style={{width:"150px",height:"150px"}} src={photo.url}/>
    <button onClick={()=>{
        handleDelete(photo);
    }}
    >delete photo
    </button>
    </li>
                    );
                })}
            </ul>
        </div>
    )
}