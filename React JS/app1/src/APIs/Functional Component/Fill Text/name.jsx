import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Name = () => {
    const [name, setnames] = useState([]) ;
   
    useEffect(()=>{
        let URL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setnames(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fill Text <span style={{color:'green'}}>"Name"</span></h1>

    {name.map((nam)=>{
         return <li key={name}><span style={{color:'red', font:'italic'}}> First Name :  </span>{nam.fname}</li>
       })}
    </ol>
   </div>
}