import React from 'react';
import {useState,useEffect} from 'react' 
import axios from 'axios'

export const Person = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true').then(
      response=>setData(response.data)
    )

  },[])
  return <div>
      <h2 style={{color:'red'}}>Fill Text Name Component</h2>
      {data.map(item => <p key={item.username} style={{color:'black'}}><span style={{fontSize:'20px', fontWeight:'bold'}}>User Name:</span> {item.username}</p>)}
  </div>;
};
