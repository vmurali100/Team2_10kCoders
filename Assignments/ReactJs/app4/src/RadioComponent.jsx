import axios from 'axios';
import React, { useState } from 'react'

export default function RadioComponent() {
    const [radios, setradios] = useState([])
    const getRadios = ()=>{
        var options = {
            method: 'GET',
            url: 'https://radio-world-50-000-radios-stations.p.rapidapi.com/v1/radios/getTopByCountry',
            params: {query: 'fr'},
            headers: {
              'x-rapidapi-host': 'radio-world-50-000-radios-stations.p.rapidapi.com',
              'x-rapidapi-key': 'eeae37d281msh6143fbf48fed1efp1204e8jsn2b9e6653003a'
            }
          };
          axios.request(options).then((res)=>{
           console.log(res.data  )
          })
    }
    return (
        <div>
            <button onClick={getRadios()}>Get Radios</button>
        </div>
    )
}
