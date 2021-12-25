import axios from "axios";
import { useEffect, useState } from "react"

const Livesport = ()=>{
    const [Live , setLive] = useState([])
  useEffect(()=>{
    var options = {
        method: 'GET',
        url: 'https://odds.p.rapidapi.com/v1/sports',
        headers: {
          'x-rapidapi-host': 'odds.p.rapidapi.com',
          'x-rapidapi-key': 'fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2'
        }
      };
      axios.request(options).then((res)=>{
          console.log(res.data.data)
          setLive(res.data.data)
      })
  },[])
  return <div>
<ol>
    {Live.map((lv)=>{
        return <p><li key={lv.title}>{lv.key}</li> <br />
        <li key={lv.key}>{lv.group}</li> <br />
        <li key={lv.group}>{lv.details}</li> <br />
        <li key={lv.details}>{lv.active}</li>
        </p> 
    })}
</ol>
  </div>
}
export default Livesport