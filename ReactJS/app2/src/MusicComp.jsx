import React, { useEffect, useState } from "react";
import axios from 'axios'
export const MusicComp =()=>{
  const[music, setMusic]=useState([])
  useEffect(()=>{
    var options = {
      method: 'GET',
      url: 'https://theaudiodb.p.rapidapi.com/searchalbum.php',
      params: {s: 'daft_punk'},
      headers: {
        'x-rapidapi-host': 'theaudiodb.p.rapidapi.com',
        'x-rapidapi-key': 'c7f365081cmsh15f59f6fa2f4617p144973jsna39a8d3f169c'
      }
    };
    axios.request(options).then(({data})=>{
     console.log(data)
    })
    },[])

  
  return(
    <div>
      <h1>hi ,hello namastea</h1>
      <ul>
        {MusicComp.map((mus)=>{
          return <li>{mus.idlabel}</li>
        })}
      </ul>
    </div>
  )
}
