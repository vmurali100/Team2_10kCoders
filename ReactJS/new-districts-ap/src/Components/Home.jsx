import React, { useState ,useEffect } from "react"; 
import axios from 'axios' ;
import {Link} from 'react-router-dom'
import { Login } from "./Login";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";


export const Home = ()=>{
    const [input , setInput ] = useState("") ;
    const [user , setUser] = useState({}) ;
    const [isLoggedIn , setIsLoggedIn] = useState(false) ;
    const [district , setDistrict] = useState("") ;


    const navigate = useNavigate();
   useEffect(()=>{
        var loggedUser =JSON.parse(localStorage.getItem("loggedUser")) ;
        console.log(loggedUser)
        setUser(loggedUser);
        if (loggedUser){
            setIsLoggedIn(true)
        }else {
            setIsLoggedIn(false)
        }
    },[])
   const getdistrict = ()=>{
        console.log(input) ;
     if(isLoggedIn){
        axios.get('http://localhost:3000').then((res)=>{
            console.log(res.data)
            // let data = res.data
          let dist =  res.data.find(d=>d.constiuencies.indexOf(input) > -1) ;
          console.log(dist.dist)
          setDistrict(dist.dist)
     })
    } else
      {
        alert("kindly log in to view the results")  
         navigate("/login") 
        
     }
    
        //   window.alert("kindly log in to view the results") ;
        // localStorage.setItem("input" , JSON.stringify(input));
        // axios.get('http://localhost:3000/user').then((res)=>{setUser(res.data)})

        // if(user.length == 0){
        //    navigate("/login")
        // } else if (){}
 
        // })
    }
    return <div>
        <div className="container" style={{ "marginTop" : "200px"}}>
            <h2>Enter Your constituency To Find Your District</h2>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                <label htmlFor="inputPassword5" className="form-label">Enter Your constituency</label>
                 <input type="text"  className="form-control" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                 <button type="button" onClick={getdistrict}> Get District</button>
                  </div>
                <div className="col-3"></div>
            </div>
        </div>
        <div className="container">
            <div className="row" >
                <div className="col-4"></div>
                <div className="col-4">  <div  id="results">
   {isLoggedIn ? <h1>the districts is = {district} </h1> : "" }
  </div></div>
                <div className="col-4"></div>
            </div>
        </div>
    
    </div>
  
}