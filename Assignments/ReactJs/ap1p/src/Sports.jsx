import React,{useState} from 'react'
import axios from "axios"

export default function Sports() {
    const [series, setseries] = useState([])
    const getSeries = ()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/series',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'eeae37d281msh6143fbf48fed1efp1204e8jsn2b9e6653003a'
            }
          };
          axios.request(options).then((res)=>{
              console.log(res.data.results)
              setseries(res.data.reults)
          })
          

    }
    return (
        <div>
          <button onClick={getSeries()} >GET SERIES</button>  
          
        </div>
    )
}
