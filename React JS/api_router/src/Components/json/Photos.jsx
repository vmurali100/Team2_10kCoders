import React from 'react';
import {useState,useEffect} from 'react' 
import axios from 'axios'


export const Photos = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/photos').then(
      response=>setData(response.data)
    )

  },[])
  return <div>
      <h2 style={{color:'red'}}>Json Place Holder Photos Component</h2>
      {data.map(item => <p key={item.title} style={{color:'black'}}><span style={{fontSize:'20px', fontWeight:'bold'}}>Title:</span> {item.title}</p>)}

  </div>;
};