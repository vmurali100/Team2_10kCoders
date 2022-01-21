import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

export const Users =()=>{
    const [user , setUser] =  useState([]) ;

    useEffect(()=>{
        axios.get('http://localhost:3000/json').then(({data})=>{
            console.log(data)
            setUser(data)
        })
    }, []) ;
    const handledata =()=>{
        // axios.get('http://localhost:3000/json').then(({data})=>{
        //     console.log(data)
        //     setUser(data)
        // })
    }

    return <div>
   {user.map((us)=>{
       return <li><Link to={us}>{us}</Link></li>
   })} 
    {/* <button type="button" onClick={()=>handledata()} > <Link to="user"> get data </Link> </button>  */}
    </div>
}