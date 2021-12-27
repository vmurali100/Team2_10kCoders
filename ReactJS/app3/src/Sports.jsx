import React, { useState } from 'react'
import axios from 'axios'
export const Sports = ()=>{
    const[series,setseries] = useState([])
    const getData = ()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/series',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'c7f365081cmsh15f59f6fa2f4617p144973jsna39a8d3f169c'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(getData)
              console.log(response.data.results);
              setseries(response.data.results)
          }).catch(function (error) {
              console.error(error);
          });
    }
    return(
        <div>
            <h1>hello </h1>
            <button onClick={getData}>GetData</button>
            <hr />
            {series.map((char)=>{
                return <p>{char.type}</p>
            })}
        </div>
    )
}