import axios from 'axios';
import React, { useState,useEffect} from 'react'

export default function MusicComponent() {
    const [music, setmusic] = useState([])
    useEffect(()=>{
        var options = {
            method: 'GET',
            url: 'https://music-news-api.p.rapidapi.com/news',
            headers: {
              'x-rapidapi-host': 'music-news-api.p.rapidapi.com',
              'x-rapidapi-key': 'eeae37d281msh6143fbf48fed1efp1204e8jsn2b9e6653003a'
            }
          };
          axios.request(options).then((res)=>{
            console.log("AUTHENICATION DATA",res.data)
            setmusic(res.data)
          })
    },[])
    return (
        <div>
            <ul>
                {music.map((msc)=>{
                    return <li>{msc.source}</li>
                })}
            </ul>
        </div>
    )
}
