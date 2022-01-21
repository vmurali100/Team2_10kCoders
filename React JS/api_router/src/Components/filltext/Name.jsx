import React from 'react';
import {useState,useEffect} from 'react' 
import axios from 'axios'

export const Name = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true').then(
      response=>setData(response.data)
    )

  },[])
  return <div>
      <h2 style={{color:'red'}}>Fill Text Name Component</h2>
      {data.map(item => <p key={item.fname} style={{color:'black'}}><span style={{fontSize:'20px', fontWeight:'bold'}}>First Name:</span> {item.fname}</p>)}
  </div>;
};
