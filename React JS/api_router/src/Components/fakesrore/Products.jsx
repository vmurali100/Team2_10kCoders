import React from 'react';
import {useState,useEffect} from 'react' 
import axios from 'axios'

export const Products = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/products').then(
      response=>setData(response.data)
    )

  },[])
  return <div>
      <h2 style={{color:'red'}}>Fake Store Api Products Component</h2>
      {data.map(item => <p key={item.title} style={{color:'black'}}><span style={{fontSize:'20px', fontWeight:'bold'}}>Title:</span> {item.title}</p>)}
  </div>;
};
