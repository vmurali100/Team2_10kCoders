import React,{useState} from "react";
import axios from "axios"
export const DistrictDetails = () => {
    const [userInput, setuserInput] = useState("");
    const [searchdist, setsearchdist] = useState("");
    const searchDistrict = ()=>{
        console.log(userInput );
        axios.get("http://localhost:3000/districts").then(res=>{
            console.log(res.data);
            let dist = res.data.find(d=>d.constituencies.indexOf(userInput) > -1)
            console.log(dist);
            setsearchdist(dist)
        })
        
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
