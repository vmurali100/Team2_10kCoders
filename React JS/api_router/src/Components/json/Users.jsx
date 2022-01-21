import React from 'react';
import {useState,useEffect} from 'react' 
import axios from 'axios'

export const Users = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(
      response=>setData(response.data)
    )

  },[])
  return <div>
      <h2 style={{color:'red'}}>Json Place Holder Users Component</h2>
      {data.map(item => <p key={item.name} style={{color:'black'}}><span style={{fontSize:'20px', fontWeight:'bold'}}>Name:</span> {item.name}</p>)}
  </div>;
};
