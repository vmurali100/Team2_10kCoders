import axios from "axios";
import { useEffect, useState } from "react"

const Insta =()=>{
    const [instagram , setInstagram] = useState([])

    useEffect(()=>{
        var options = {
            method: 'GET',
            url: 'https://instagram47.p.rapidapi.com/user_following',
            params: {userid: '1718924098'},
            headers: {
              'x-rapidapi-host': 'instagram47.p.rapidapi.com',
              'x-rapidapi-key': 'fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2'
            }
          };
          axios.request(options).then(({data})=>{
              console.log(data)
              setInstagram(data)
          })
    },[])
    return  <div> 
       <ol> {instagram.map((inst)=>{
            return <li>{inst}</li>
        })}</ol>
    </div>
}
export default Insta