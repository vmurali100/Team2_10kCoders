import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Persons = () => {
    const [person, setpersons] = useState([]) ;
   
    useEffect(()=>{
        let URL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setpersons(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fake Store API<span style={{color:'green'}}>"Persons"</span></h1>

    {person.map((persons)=>{
         return <li key={person}><span style={{color:'red', font:'italic'}}> First Name :  </span>{persons.fname}</li>
       })}
    </ol>
   </div>
}