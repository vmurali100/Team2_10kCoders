import axios from "axios";
import React,{useState,useEffect} from "react";

export const FunctionalComponent4= ()=>{
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/posts"
        axios.get(URL).then(({data})=>{
            setPosts(data)
        })
    },[])

    return(
        <div>
            <h1>FUNCTIONAL COMPONENT 4</h1>
            <ul>
                {posts.map((post)=>
                <li key={post.id}>{post.id}</li>    
                )}
            </ul>
        </div>
    )
}