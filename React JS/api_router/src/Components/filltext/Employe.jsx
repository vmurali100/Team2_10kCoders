import React from 'react';
import {useState,useEffect} from 'react' 
import axios from 'axios'

export const Employe = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/employe').then(
      response=>setData(response.data)
    )

  },[])
  return <div>
      <h2 style={{color:'red'}}>Fill Text Employe Component</h2>
      {data.map(item => <p key={item.email} style={{color:'black'}}><span style={{fontSize:'20px', fontWeight:'bold'}}>Email:</span> {item.email}</p>)}
  </div>;
};
