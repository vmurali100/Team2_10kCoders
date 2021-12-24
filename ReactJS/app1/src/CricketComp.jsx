import React,{ useEffect, useState } from "react";
import axios from "axios";
export const CricketComp = ()=>{
    const[Cricket , setCricketComp] = useState([])
    useEffect(()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/series',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'c7f365081cmsh15f59f6fa2f4617p144973jsna39a8d3f169c'
            }
          };
            let URL ='https://cricket-live-data.p.rapidapi.com/series';
            axios.request(options).then(({data})=>{
               console.log(data.results)
               setCricketComp(data.results)
            })
             
    },[])
    const getSeries = ()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/series',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'c7f365081cmsh15f59f6fa2f4617p144973jsna39a8d3f169c'
            }
          };
            let URL ='https://cricket-live-data.p.rapidapi.com/series';
            axios.request(options).then(({data})=>{
               console.log(data.results)
               setCricketComp(data.results)
            })
        }
return <div>
    <h1>
        api component
    </h1>
    <button onClick={()=>{getSeries()}}>GETSERIES</button>
    <button onClick={()=>{}}></button>
    <button onClick={()=>{}}></button>
    <button onClick={()=>{}}></button>
    <button onClick={()=>{}}></button>
    <button onClick={()=>{}}></button>
    <button onClick={()=>{}}></button>
    <ul>
        {cricket.map((cric)=>{
            return <li>{cric.getSeries}</li>
        })}
    </ul>
</div>
}
export default CricketComp;
