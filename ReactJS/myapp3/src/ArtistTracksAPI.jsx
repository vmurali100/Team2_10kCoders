import axios from "axios";
import { useEffect, useState } from "react"

const Artist = () =>{
    const [Track , setTrack] = useState([])

    useEffect(()=>{
        var options = {
            method: 'GET',
            url: 'https://shazam-core.p.rapidapi.com/v1/artists/tracks',
            params: {artist_id: '43328183', limit: '10'},
            headers: {
              'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
              'x-rapidapi-key': 'fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2'
            }
          };
          axios.request(options).then((res)=>{
             
              console.log(res.data)
              setTrack(res.data)
          })
    },[])
    return <div>
        <ol>
            {Track.map((tr)=>{
                return <li>{tr.title}</li>
            })}
        </ol>
    </div>
}
export default  Artist