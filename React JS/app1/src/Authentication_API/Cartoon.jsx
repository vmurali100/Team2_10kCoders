import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const Cartoon= ()=>{
    const [cartoon,setCartoon]= useState([])
    useEffect(()=>{
        var options = {
            method: 'GET',
            url: 'https://doppelme-avatars.p.rapidapi.com/assets/1101/eye',
            headers: {
              'x-rapidapi-host': 'doppelme-avatars.p.rapidapi.com',
              'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
            }
          };
        let URL = "https://doppelme-avatars.p.rapidapi.com/assets/1101/eye" ;
        axios.request(options).then(({data})=>{
            console.log(data)
            setCartoon(data.asset_ids)
        })
    
    },[]) 

   const getSeries= ()=>{
    var options = {
        method: 'GET',
        url: 'https://doppelme-avatars.p.rapidapi.com/assets/1101',
        headers: {
          'x-rapidapi-host': 'doppelme-avatars.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setCartoon(data.asset_ids)
    })
   }

   const getFixtures= ()=>{
    var options = {
        method: 'GET',
        url: 'https://doppelme-avatars.p.rapidapi.com/bodytypes',
        headers: {
          'x-rapidapi-host': 'doppelme-avatars.p.rapidapi.com',
          'x-rapidapi-key': '3cd6e2915fmsh0c8c6ba6a0dc1a2p1ae8a8jsnc04fd838e76f'
        }
      };
      axios.request(options).then(({data})=>{
        console.log(data)
        setCartoon(data.asset_ids)
    })
   }

  


    return <div>
        <h1> Cricket </h1>
        <button onClick={()=>{getSeries()}}>Get Asset Type</button> &nbsp;
        <button onClick={()=>{getFixtures()}}>Get Body Types</button>&nbsp;
        <ul>
            {cartoon.map((cart)=>{
                return <li>{cart.description}</li>
            })}
        </ul>
    </div>
}
