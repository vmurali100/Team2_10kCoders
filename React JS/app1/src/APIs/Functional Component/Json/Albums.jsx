import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Albums = () => {
    const [album, setalbum] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/albums" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setalbum(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Json Place Holder<span style={{color:'green'}}>"Albums"</span></h1>

    {album.map((albums)=>{
         return <li key={album}><span style={{color:'red', font:'italic'}}> Title :  </span>{albums.title}</li>
       })}
    </ol>
   </div>
}