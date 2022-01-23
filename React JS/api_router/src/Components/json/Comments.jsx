import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Comments = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('  http://localhost:3000/comments').then(
            response => setData(response.data)
        )

    }, [])
    return <div>
        <h2 style={{color:'red'}}>Json Place Holder Comments Component</h2>
      {data.map(item => <p key={item.name} style={{color:'black'}}><span style={{fontSize:'20px', fontWeight:'bold'}}>Name:</span> {item.name}</p>)}
    </div>;
};
