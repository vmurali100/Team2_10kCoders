import axios from "axios";
import { useEffect, useState } from "react"

 const Trail = ()=>{
 const [data , setData] = useState([])

 useEffect(()=>{
    var options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
          start_year: '1970',
          end_year: '2020',
          min_imdb: '6',
          max_imdb: '7.8',
          genre: 'action',
          language: 'english',
          type: 'movie',
          sort: 'latest',
          page: '1'
        },
        headers: {
          'x-rapidapi-host': 'ott-details.p.rapidapi.com',
          'x-rapidapi-key': 'fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2'
        }
      };
      axios.request(options).then(({data})=>{
          console.log(data.results)
          setData(data.results)
      })
 },[])
 const getSyn =() =>{
    var options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
          start_year: '1970',
          end_year: '2020',
          min_imdb: '6',
          max_imdb: '7.8',
          genre: 'action',
          language: 'english',
          type: 'movie',
          sort: 'latest',
          page: '1'
        },
        headers: {
          'x-rapidapi-host': 'ott-details.p.rapidapi.com',
          'x-rapidapi-key': 'fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2'
        }
      };
      axios.request(options).then(({data})=>{
          console.log(data.results)
          setData(data.results)
      })
      document.getElementById("titled").style.display = "none";
      document.getElementById("titled2").style.display = "block";
      document.getElementById("titled3").style.display = "none";

 }
 const getBid =() =>{
    var options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
          start_year: '1970',
          end_year: '2020',
          min_imdb: '6',
          max_imdb: '7.8',
          genre: 'action',
          language: 'english',
          type: 'movie',
          sort: 'latest',
          page: '1'
        },
        headers: {
          'x-rapidapi-host': 'ott-details.p.rapidapi.com',
          'x-rapidapi-key': 'fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2'
        }
      };
      axios.request(options).then(({data})=>{
          console.log(data.results)
          setData(data.results)
      })
      document.getElementById("titled").style.display = "none";
      document.getElementById("titled3").style.display = "block";
      document.getElementById("titled2").style.display = "none";

 }
return <div>
    <button onClick={()=>getSyn()}>Get SYNOPSIS</button>
    <button onClick={()=>getBid()}>Get IMDBID</button>
<ul id="titled" >
    {data.map((d)=>{
        return <li>{d.title}</li>
    })}
</ul>
<ul id="titled2" style={{"display":"none"}}>
    {data.map((d)=>{
        return <li>{d.synopsis}</li>
    })}
</ul>
<ul id="titled3" style={{"display":"none"}}>
    {data.map((d)=>{
        return <li>{d.imdbid}</li>
    })}
</ul>


</div>
}
export default Trail