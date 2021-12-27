import React, { useState,useEffect } from "react";

import axios from "axios";
export const Fk13=()=>{
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        let cuURL="https://fakestoreapi.com/users"
        axios.get(cuURL).then(({data})=>{
            console.log(data);
            setUsers(data);
        });
    },[])
    const handleDelete=(user)=>{
        console.log(user);
        let balanceUsers=users.filter((usr)=>usr.id!==user.id);
        setUsers (balanceUsers);
    }
    return(
        <div>
            <h2>users</h2>
            <ul>
                {users.map((user)=>{
                    return(
<li>
{user.email}

    <button onClick={()=>{
        handleDelete(user);
    }}
    >delete user
    </button>
    </li>
                    );
                })}
            </ul>
        </div>
    )
}