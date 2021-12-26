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
        setCricket(data.results.fixture)
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
        <h1> Api</h1>
        <button onClick={()=>{getSeries()}}>Series</button>  <br /> 
        <button onClick={()=>{getFixtures()}}>Fixtures</button> <br />
        <button onClick={()=>{GetFixSeries()}}>Fixtures By Series</button> <br />
        <button onClick={()=>{getFixdate()}}>Fixtures By Date</button> <br />
        <button onClick={()=>{getResults()}}>Results</button> <br />
        <button onClick={()=>{getResultsByDate()}}>results By Date</button> <br />
        <button onClick={()=>{getMatch()}}>Match Scorecard</button> <br />
        <ul>
            {cricket.map((cric)=>{
                return <li key={cric.id}>{cric.match_title}</li>
            })}
        </ul>
    </div>
}