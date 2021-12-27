import React, { useState,useEffect } from "react";

import axios from "axios";
export const Js12=()=>{
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        let pURL="https://jsonplaceholder.typicode.com/posts"
        axios.get(pURL).then(({data})=>{
            console.log(data);
            setPosts(data);
        });
    },[])
    const handleDelete=(post)=>{
        console.log(post);
        let balancePosts=posts.filter((pst)=>pst.id!==post.id);
        setPosts(balancePosts);
    }
    return(
        <div>
            <h2>posts</h2>
            <ul>
                {posts.map((post)=>{
                    return(
<li>
    {post.title}
    <button onClick={()=>{
        handleDelete(post);
    }}
    >delete post
    </button>
    </li>
                    );
                })}
            </ul>
        </div>
    )
}