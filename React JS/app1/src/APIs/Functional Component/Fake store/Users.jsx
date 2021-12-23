import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Users = () => {
    const [users, setUsers] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://fakestoreapi.com/users" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setUsers(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fake Store API <span style={{color:'green'}}>"Users"</span></h1>

    {users.map((user)=>{
         return <li key={users}><span style={{color:'red', font:'italic'}}> Email :  </span>{user.email}</li>
       })}
    </ol>
   </div>
}