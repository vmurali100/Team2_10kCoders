import React,{useState}from 'react'
import axios from 'axios'
export const MMkeravani =()=>{
    const[listen , setlisten] = useState([])
    const getMus = ()=>{
        var options = {
            method: 'GET',
            url: 'https://theaudiodb.p.rapidapi.com/searchalbum.php',
            params: {s: 'daft_punk'},
            headers: {
              'x-rapidapi-host': 'theaudiodb.p.rapidapi.com',
              'x-rapidapi-key': 'c7f365081cmsh15f59f6fa2f4617p144973jsna39a8d3f169c'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data.album);
              setlisten(response.data.album)
          }).catch(function (error) {
              console.error(error);
          });
    }
    return(
        <div>
            <h1>App</h1>
            <button onClick={getMus}>Music</button>
            <hr />
            {listen.map((alb)=>{
                return <p>{alb.idLabel}</p>
            })}
        </div>
    )
}