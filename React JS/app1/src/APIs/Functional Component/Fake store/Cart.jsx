import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Cart = () => {
    const [carts, setCarts] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://fakestoreapi.com/users" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setCarts(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fake Store API<span style={{color:'green'}}>"Carts"</span></h1>

    {carts.map((cart)=>{
         return <li key={carts}><span style={{color:'red', font:'italic'}}> Id:  </span>{cart.username}</li>
       })}
    </ol>
   </div>
}