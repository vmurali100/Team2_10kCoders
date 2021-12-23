import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Posts = () => {
    const [post, setposts] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/posts" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setposts(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fake Store API<span style={{color:'green'}}>"Posts"</span></h1>

    {post.map((posts)=>{
         return <li key={post}><span style={{color:'red', font:'italic'}}> Title :  </span>{posts.title}</li>
       })}
    </ol>
   </div>
}