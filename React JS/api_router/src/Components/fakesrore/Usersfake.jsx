import React from 'react';
import {useState,useEffect} from 'react' 
import axios from 'axios'

export const Usersfake = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/users').then(
      response=>setData(response.data)
    )

  },[])
  return <div>
      <h2 style={{color:'red'}}>Fake Store Api Users Component</h2>
      {data.map(item => <p key={item.email} style={{color:'black'}}><span style={{fontSize:'20px', fontWeight:'bold'}}>Email:</span> {item.email}</p>)}
  </div>;
};
