import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

export const Users =()=>{
    const [user , setUser] =  useState([]) ;
    const [filltext , setFilltext] =  useState([]) ;
    const [fakestore , setFakestore] =  useState([]) ;

    useEffect(()=>{
        axios.get('http://localhost:3000/json').then(({data})=>{
            console.log(data)
            setUser(data)
        }) ;
        axios.get('http://localhost:3000/filltext').then(({data})=>{
            console.log(data)
            setFilltext(data)
        })
        axios.get('http://localhost:3000/fakestore').then(({data})=>{
            console.log(data)
            setFakestore(data)
        })
    }, []) ;
    const handledata =()=>{
        // axios.get('http://localhost:3000/json').then(({data})=>{
        //     console.log(data)
        //     setUser(data)
        // })
    }

    return <div className="container" style={{"backgroundColor" : "lightgrey"}}>
 <div className="row">
 {user.map((us)=>{
       return <h1 ><Link to={us}><button className="btn btn-primary" style={{"width" : "150px"}}><h4>{us}</h4></button></Link></h1>
   })} 
 </div> <hr />
 <div className="row">
 {filltext.map((us)=>{
       return <h1 ><Link to={us}><button className="btn btn-success" style={{"width" : "150px"}}><h4>{us}</h4></button></Link></h1>
   })}  
 </div><hr />
 <div className="row">
 {fakestore.map((us)=>{
       return <h1 ><Link to={us}><button className="btn btn-warning" style={{"width" : "150px"}}><h4>{us}</h4></button></Link></h1>
   })} 
 </div>
    {/* <button type="button" onClick={()=>handledata()} > <Link to="user"> get data </Link> </button>  */}
    </div>
}