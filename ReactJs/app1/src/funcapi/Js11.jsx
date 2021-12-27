import React, { useState,useEffect } from "react";
import axios from "axios";
export const Js11=()=>{
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        let URL="https://jsonplaceholder.typicode.com/users"
        axios.get(URL).then(({data})=>{
            console.log(data);
            setUsers(data);
        });
    },[])
    const handleDelete=(user)=>{
        console.log(user);
        let balanceUsers=users.filter((usr)=>usr.id!==user.id);
        setUsers(balanceUsers);
    }
    return(
        <div>
            <h2>users</h2>
            <ul>
                {users.map((user)=>{
                    return(
<li>
    {user.name}
    <button onClick={()=>{
        handleDelete(user);
    }}
    >delete name
    </button>
    </li>
                    );
                })}
            </ul>
        </div>
    )
}