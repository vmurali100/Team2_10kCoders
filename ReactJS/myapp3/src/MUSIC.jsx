import React, { useState ,useEffect } from 'react'
import axios from 'axios';

const Music = ()=>{
    const [music, setMusic] = useState([]) ;
  ;
   
    useEffect(()=>{
      var options = {
        method: 'GET',
        url: 'https://odds.p.rapidapi.com/v1/sports',
        headers: {
          'x-rapidapi-host': 'odds.p.rapidapi.com',
          'x-rapidap-key': 'fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2'
        }
      }
    
      axios.request(options).then(({data})=>{
          console.log(data.data)
          setMusic(data.data)
      })
     
    },[]) ;
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++
    const getSport = () =>{
 
      var options = {
        method: 'GET',
        url: 'https://odds.p.rapidapi.com/v1/sports',
        headers: {
          'x-rapidapi-host': 'odds.p.rapidapi.com',
          'x-rapidap-key': 'fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2'
        }}
        axios.request(options).then(({data})=>{
          console.log(data.data)
          setMusic(data.data)
          return <div>
          <ol>
          {music.forEach((mk)=>{
               <li>{mk.key}</li>
             })}
          </ol>
           </div>
      })
      
    
    
    }
  
    
    return <div>
   
   <button onClick={()=>{getSport()}}>GET SPORTS</button>
   </div>
}
export default  Music

