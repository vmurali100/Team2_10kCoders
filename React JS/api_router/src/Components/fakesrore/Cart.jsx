import React from 'react';
import {useState,useEffect} from 'react' 
import axios from 'axios'

export const Cart = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/cart').then(
      response=>setData(response.data)
    )

  },[])
  return <div>
      <h2 style={{color:'red'}}>Fake Store Api Cart Component</h2>
      {data.map(item => <p key={item.userId} style={{color:'black'}}><span style={{fontSize:'20px', fontWeight:'bold'}}>User Id:</span> {item.userId}</p>)}
  </div>;
};
