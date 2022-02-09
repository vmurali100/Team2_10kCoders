import React from "react";
import axios from "axios";
import {Navigate, useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { connect, useSelector } from "react-redux";
import { GetConstAction, getDistrictsDataAction } from "../Actions";

 const Home = (props) => {
    // const loggedUser =useSelector((state)=>state.loggedUser);
    const navigate = useNavigate();
    const {loggedUser ,getDistrictFunc, result} = props
  const[input , setInput ] = useState("") ;
   var inputRef = React.createRef()
 console.log(props)
 const handleChange =(e)=>{
    setInput(e.target.value)
 } 

 useEffect(()=>{
    inputRef.current.focus()
 },[])
   return <div>
        <div className="container" style={{ "marginTop" : "10px"}}>
            <h2 style={{textAlign:"left"}}>Andhra Pradesh Districts</h2>
            <div className="row">
               
                <div className="col-4">
                <label  className="form-label">Enter Your constituency</label>
                 <input type="text"  className="form-control" ref = {inputRef} value={input} name="input" onChange={(e)=>handleChange(e)} />
                 <br/><button type="button" className="btn btn-primary" onClick={()=>getDistrictFunc(input ,loggedUser , ()=> navigate('login'))}> Get District</button>
                  </div>
                <div className="col-8">
                {result != null && loggedUser  ? <h2>{input} constituency District is : <span style={{color:"blue"}}>{result} </span></h2> : "" }
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row" >
                <div className="col-4"></div>
                <div className="col-4">  <div  id="results">
  
  </div></div>
                <div className="col-4"></div>
            </div>
        </div>
    
    </div>
  
}
 
  const MSTP =(state)=>{
    return {
        result : state.result,
        loggedUser : state.loggedUser
    }
}
const MDTP =(dispatch)=>{
    return {
        getDistrictFunc : (input ,loggedUser,nav)=>dispatch(GetConstAction(input ,loggedUser ,nav)) ,
      
    }

}
export default connect(MSTP,MDTP)(Home)