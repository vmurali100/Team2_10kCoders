import React,{useState} from "react"
import axios from "axios";

export const Music=()=>{
    const[music,setMusic]=useState([]);
    const getData=()=>{
        var options = {
            method: 'GET',
            url: 'https://50k-radio-stations.p.rapidapi.com/get/channels',
            params: {keyword: 'a', country_id: '50', page: '1'},
            headers: {
              'x-rapidapi-host': '50k-radio-stations.p.rapidapi.com',
              'x-rapidapi-key': '6f24035d0bmsh367f3e294d2c40bp18cdb1jsnd0b0f9737de7'
            }
          };
        axios.request(options).then(function(response)
            {
            console.log(response.data.data);
            setMusic(response.data.data);
        });
    }
    return<div>
        <button onClick={getData}>getdata</button>
        
            {music.map((mus)=>{
                return(
                    <p>{mus.name}</p>
                )
            })}
        
    </div>
}
