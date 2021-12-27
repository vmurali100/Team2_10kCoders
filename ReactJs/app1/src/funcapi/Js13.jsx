import React, { useState,useEffect } from "react";

import axios from "axios";
export const Js13=()=>{
    const[comments,setComments]=useState([]);
    useEffect(()=>{
        let cURL="https://jsonplaceholder.typicode.com/comments"
        axios.get(cURL).then(({data})=>{
            console.log(data);
            setComments(data);
        });
    },[])
    const handleDelete=(comment)=>{
        console.log(comment);
        let balanceComments=comments.filter((cmnt)=>cmnt.id!==comment.id);
        setComments(balanceComments);
    }
    return(
        <div>
            <h2>comments</h2>
            <ul>
                {comments.map((comment)=>{
                    return(
<li>
    {comment.email}
    <button onClick={()=>{
        handleDelete(comment);
    }}
    >delete email
    </button>
    </li>
                    );
                })}
            </ul>
        </div>
    )
}