import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Users = () => {
    const [user, setusers] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/users" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setusers(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fake Store API<span style={{color:'green'}}>"Users"</span></h1>

    {user.map((users)=>{
         return <li key={user}><span style={{color:'red', font:'italic'}}> First Name :  </span>{users.name}</li>
       })}
    </ol>
   </div>
}