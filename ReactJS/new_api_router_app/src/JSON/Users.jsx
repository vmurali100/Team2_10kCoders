import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

export const Users =()=>{
    const [user , setUser] =  useState([]) ;

    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/photos').then(({data})=>{
        //     console.log(data)
        //     setUser(data)
        // })
    }, []) ;
    const handledata =()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then(({data})=>{
            console.log(data)
            setUser(data)
        })
    }

    return <div>
   {user.map((us)=>{
       return <li>{us.title}</li>
   })} 
 <button type="button" onClick={()=>handledata()} > <Link to="/user">  get data </Link></button>
    </div>
}