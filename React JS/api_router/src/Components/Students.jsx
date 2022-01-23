import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Students = () => {
    const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/students').then(res =>{
        console.log(res.data);
        localStorage.setItem("students",JSON.stringify(res.data))
        setData(res.data)
    }
    )

  },[])
  return <div>
      <h2 style={{color:'red'}}>10K Coders Students List</h2>
      {data.map(student => <p key={student.name} style={{ cursor:"pointer"}}><Link to={`/students/${student.name}`}>{student.name}</Link> </p>)}
  </div>;
};
