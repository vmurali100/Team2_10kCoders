import axios from "axios";
import React, { useEffect, useState } from "react";
export const MusicComponentPiano = () => {
    const [music, setMusic] = useState([])
    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://radio-world-50-000-radios-stations.p.rapidapi.com/v1/radios/getTopByCountry',
            params: {query: 'fr'},
            headers: {
              'x-rapidapi-host': 'radio-world-50-000-radios-stations.p.rapidapi.com',
              'x-rapidapi-key': 'eeae37d281msh6143fbf48fed1efp1204e8jsn2b9e6653003a'
            }
          };
        axios.request(options).then((res) => {
            console.log("second Compnent",res.data)
            setMusic(res.data.radios)
        })
    }, [])

    return(
        <div>
            <ul>
                {music.map((msc)=>{
                    return(<li key={msc.channel_id}>{msc.name}</li>)
                })}
            </ul>
        </div>
    )
}