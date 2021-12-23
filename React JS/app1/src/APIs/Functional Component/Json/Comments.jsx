import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Comments = () => {
    const [comment, setcomments] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/comments" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setcomments(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fake Store API<span style={{color:'green'}}>"Users"</span></h1>

    {comment.map((comments)=>{
         return <li key={comment}><span style={{color:'red', font:'italic'}}> Email :  </span>{comments.email}</li>
       })}
    </ol>
   </div>
}