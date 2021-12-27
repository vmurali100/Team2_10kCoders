import React, { useState } from "react";
import axios from 'axios'
export const Sports = () => {
  const [series, setseries] = useState([]);

  const getData=()=>{
    var options = {
        method: 'GET',
        url: 'https://cricket-live-data.p.rapidapi.com/series',
        headers: {
          'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
          'x-rapidapi-key': 'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX'
        }
      };

      
axios.request(options).then(function (response) {
	console.log(response.data.results);
    setseries(response.data.results)
}) 
  }
  return <div>
      <button onClick={getData}>Get Data</button>
      <hr />
      {series.map((info)=>{
          return <p>{info.type}</p>
      })}
  </div>;
};

