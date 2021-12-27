import React, { useState } from "react";
import axios  from "axios";
export const Movies = ()=>{
    const[title,settitle] = useState([])
 const getInfo = ()=>{
    var options = {
        method: 'GET',
        url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
        params: {type: 'get-movies-by-title', title: 'matrix'},
        headers: {
          'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
          'x-rapidapi-key': 'c7f365081cmsh15f59f6fa2f4617p144973jsna39a8d3f169c'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data.movie_results);
          settitle(response.data.movie_results)
      }).catch(function (error) {
          console.error(error);
      });
 }
    return(
        <div>
            <h1>app</h1>
            <button onClick={getInfo}>GetInfo</button>
            <hr/>
            {title.map((info)=>{
                return <p>{info.title}</p>
            })}
        </div>
    )
}
