import React,{useState,useEffect} from 'react'
import axios from 'axios';


export const Tiktok = () => {
    const [tiktok,setTiktok]= useState([])
    useEffect(()=>{
    //     var options = {
    //         method: 'GET',
    //         url: 'https://api-football-beta.p.rapidapi.com/timezone',
    //         headers: {
    //           'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
    //           'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
    //         }
    //       };
        // let authObj=  {
        //     'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
        //     'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        //   }
        
        var options = {
            method: 'GET',
            url: 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions',
            params: {market: 'classic', iso_date: '2018-12-01', federation: 'UEFA'},
            headers: {
              'x-rapidapi-host': 'football-prediction-api.p.rapidapi.com',
              'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
            }
          };
          
        let URL = "https://football-prediction-api.p.rapidapi.com/api/v2/predictions" ;
        axios.request(options).then(({data})=>{
            console.log(data) 
            setTiktok(data.data)
        })
    },[])  

    const details=()=>{
        var options = {
            method: 'GET',
            url: 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions/99999',
            headers: {
              'x-rapidapi-host': 'football-prediction-api.p.rapidapi.com',
              'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
            }
          };
          axios.request(options).then(({data})=>{
            console.log(data) 
            setTiktok(data.data)
        })

    }

    const performance=()=>{
        var options = {
            method: 'GET',
            url: 'https://football-prediction-api.p.rapidapi.com/api/v2/performance-stats',
            params: {market: 'classic'},
            headers: {
              'x-rapidapi-host': 'football-prediction-api.p.rapidapi.com',
              'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
            }
          };
          axios.request(options).then(({data})=>{
            console.log(data) 
            setTiktok(data.data)
        })

    }
    return (
        <div>
            <h1>Foot Ball Team</h1>
            <button onClick={()=>{details()}}>Details</button>
            <button onClick={()=>{performance()}}>Performance</button>
             <ul>
                {tiktok.map((tik)=>{
                   return <li key={tiktok}>{tik.away_team}</li>
                })}
            </ul> 
        </div>
    )
}
