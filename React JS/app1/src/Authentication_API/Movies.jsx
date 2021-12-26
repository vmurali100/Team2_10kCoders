import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const Movies = ()=>{
    const [movies,setMovies]= useState([])
    useEffect(()=>{
        // let authObj =  {
        //     'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
        //     'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        //   }
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
              'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
            }
          };
          
        let URL = "https://ott-details.p.rapidapi.com/advancedsearch" ;
        axios.request(options).then(({data})=>{
            console.log(data)
            setMovies(data.results)
        })
    
    },[]) 

   const getParams= ()=>{
    var options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/getParams',
        params: {param: 'genre'},
        headers: {
          'x-rapidapi-host': 'ott-details.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setMovies(data.results)
    })
   }

   const getSearch= ()=>{
    var options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/search',
        params: {title: 'Endgame', page: '1'},
        headers: {
          'x-rapidapi-host': 'ott-details.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setMovies(data.results)
    })
   }

   const GetTitle = ()=>{
    var options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/gettitleDetails',
        params: {imdbid: 'tt9904802'},
        headers: {
          'x-rapidapi-host': 'ott-details.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setMovies(data.results)
    })

   }



    return <div>
        <h1> Cricket </h1>
        <button onClick={()=>{getParams()}}>Get Params</button> &nbsp;
        <button onClick={()=>{getSearch()}}>Get Search</button>&nbsp;
        <button onClick={()=>{GetTitle()}}>Get Title</button>&nbsp;
        <ul>
            {movies.map((move)=>{
                return <li>{move.title}</li>
            })}
        </ul>
    </div>
}
