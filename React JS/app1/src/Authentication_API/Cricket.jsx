import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const Cricket = ()=>{
    const [cricket,setCricket]= useState([])
    useEffect(()=>{
        // let authObj =  {
        //     'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
        //     'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        //   }
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
            }
          };
        let URL = "https://cricket-live-data.p.rapidapi.com/fixtures" ;
        axios.request(options).then(({data})=>{
            console.log(data)
            setCricket(data.results)
        })
    
    },[]) 

   const getSeries= ()=>{
    var options = {
        method: 'GET',
        url: 'https://cricket-live-data.p.rapidapi.com/series',
        headers: {
          'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setCricket(data.results)
    })
   }

   const getFixtures= ()=>{
    var options = {
        method: 'GET',
        url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
        headers: {
          'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setCricket(data.results)
    })
   }

   const GetFixSeries = ()=>{
    var options = {
        method: 'GET',
        url: 'https://cricket-live-data.p.rapidapi.com/fixtures-by-series/606',
        headers: {
          'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setCricket(data.results)
    })

   }

   const getFixdate = ()=>{
    var options = {
        method: 'GET',
        url: 'https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2020-09-21',
        headers: {
          'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setCricket(data.results)
    })
   }

   const getResults = ()=>{
    var options = {
        method: 'GET',
        url: 'https://cricket-live-data.p.rapidapi.com/results',
        headers: {
          'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setCricket(data.results)
    })
   }


const getMatch = ()=>{
    var options = {
        method: 'GET',
        url: 'https://cricket-live-data.p.rapidapi.com/match/2432999',
        headers: {
          'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };

      axios.request(options).then(({data})=>{
        console.log(data)
        setCricket(data.results)
    })
}

const getResultsByDate = ()=>{
    var options = {
        method: 'GET',
        url: 'https://cricket-live-data.p.rapidapi.com/results-by-date/2020-09-20',
        headers: {
          'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setCricket(data.results)
    })

}

    return <div>
        <h1> Cricket </h1>
        <button onClick={()=>{getSeries()}}>Get Series</button> &nbsp;
        <button onClick={()=>{getFixtures()}}>Get Fixtures</button>&nbsp;
        <button onClick={()=>{GetFixSeries()}}>Get Fixtures By Series</button>&nbsp;
        <button onClick={()=>{getFixdate()}}>Get Fixtures By Date</button>&nbsp;
        <button onClick={()=>{getResults()}}>Get Results</button>&nbsp;
        <button onClick={()=>{getResultsByDate()}}>Get results By Date</button>&nbsp; 
        <button onClick={()=>{getMatch()}}>Get Match Scorecard</button>
        <ul>
            {cricket.map((cric)=>{
                return <li>{cric.match_title}</li>
            })}
        </ul>
    </div>
}
