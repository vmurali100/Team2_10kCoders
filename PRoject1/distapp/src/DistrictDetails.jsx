import React,{useEffect, useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export const DistrictDetails = () => {

    let navigate = useNavigate();

    const [userInput, setuserInput] = useState("");
    const [searchdist, setsearchdist] = useState("");
    const [isLoggedIn, setisLoggedIn] = useState(false);
    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("loggedInUser"))
        if(user){
            setisLoggedIn(true)
            navigate("/")
            console.log("District Details");
        }
    },[])
    const searchDistrict = ()=>{
        console.log(userInput );
       if(isLoggedIn){
        axios.get("http://localhost:3000/districts").then(res=>{
            console.log(res.data);
            let dist = res.data.find(d=>d.constituencies.indexOf(userInput) > -1)
            console.log(dist);
            setsearchdist(dist)
        })
        
       }
       else{
           alert("You are not Logged In...Please Login To Know the Details")
           navigate('/login')
           
       }
    }
    return <div>
        <div className="container">
       <div className="row">
           <div className="col">
           <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Assembly constituency</label>
                <input type="email" className="form-control" value ={userInput}
                 onChange={(e)=>{setuserInput(e.target.value)}} 
                    />
                   </div>
           
            <button type="button" className="btn btn-primary" onClick={searchDistrict}>Find District</button>
        </form>
           </div>
          {searchdist.districtName && (
               <div className="col">
               <h2>Your District Name is :{searchdist.districtName}</h2>
           </div>
          )}
       </div>
        </div>
        
    </div>;
};
