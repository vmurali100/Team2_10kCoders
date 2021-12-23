import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Photos = () => {
    const [photos, setphotos] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/photos" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setphotos(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fake Store API<span style={{color:'green'}}>"Photos"</span></h1>

    {photos.map((photo)=>{
         return <li key={photos}><span style={{color:'red', font:'italic'}}> Title :  </span>{photo.title}</li>
       })}
    </ol>
   </div>
}