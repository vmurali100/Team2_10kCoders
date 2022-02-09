import axios from 'axios';
import React from 'react';
import { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const DistrictDetails = () => {
    let navigate =  useNavigate()
    const[isLoggedIn,setisLoggedIn] = useState(false)
    const [constval, setconstval] = useState("");
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("LoggedInUserLocalStorage"))
        if(user){
            setisLoggedIn(true)
            console.log("District Details");
        }
    }, []);
    

    const handleChange = (e)=>{
        setconstval (e.target.value)
     
    }

    const handleSubmit = ()=>{
        console.log("const",constval);
        if(isLoggedIn){
            axios.get("http://localhost:3000/districts").then((res)=>{
                console.log("Coming to This part");
            })
        }
        else{
            alert("You were Not Logged In..Please Login")
            navigate("/login")
        }
    }

  return <div>
    <form>
      <div class="form-group" style={{padding:"0px 50px 0px 50px"}}>
        <label >Enter Constituency</label>
        <input type="email" className="form-control" value={constval} onChange={(e)=>handleChange(e)} />
        
      </div>
      
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Find District</button>
    </form>
      
  </div>;
};
