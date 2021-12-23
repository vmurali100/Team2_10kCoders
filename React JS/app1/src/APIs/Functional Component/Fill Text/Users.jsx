import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Users = () => {
    const [user, setusers] = useState([]) ;
   
    useEffect(()=>{
        let URL = "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setusers(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fill Text<span style={{color:'green'}}>"Users"</span></h1>

    {user.map((users)=>{
         return <li key={user}><span style={{color:'red', font:'italic'}}> First Name :  </span>{users.username}</li>
       })}
    </ol>
   </div>
}