import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
    const [dist, setDist] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/districts").then((res)=>{
            console.log(res.data);
            setDist(res.data);
        })
    },[])
  return (<div>
    <h1>List of new districts and their Assembly constituencies</h1>
    {
        dist.map((d,i)=>{   
            return (<div>
            <h2 key={i}>{d.districtName}</h2>
            {
                d.constituencies.map((c,i)=>{
                    return <p key={i}>{c}</p>
                })
            }
            </div>)
        })
    }
  </div>);
};
