import axios from 'axios';
import React from 'react';
import { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const DistrictDetails = () => {
    let navigate =  useNavigate()
    const[isLoggedIn,setisLoggedIn] = useState(false)
    const [constval, setconstval] = useState("");
    const [districtfinder, setdistrictfinder] = useState("");
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
              let dist = res.data.find(d=>d.constituencies.indexOf(constval) > -1)
              setdistrictfinder(dist)
              
            })
        }
        else{
            alert("You were Not Logged In..Please Login")
            navigate("/login")
        }
    }

  return <div>
   <div className="container">
     <div className="row">
       <div className="col">
       <form>
      <div class="form-group" style={{padding:"0px 50px 0px 50px"}}>
        <label >Enter Constituency</label>
        <input  className="form-control" value={constval} onChange={(e)=>handleChange(e)} />
        
      </div>
      
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Find District</button>
    </form>
       </div>
       <div className="col">
         {districtfinder&& <h2>Your District Name is :{districtfinder.districtName}</h2>}
       </div>
     </div>
   </div>
      
  </div>;
};
