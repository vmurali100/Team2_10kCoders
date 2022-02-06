import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Distict = () => {
    let navigate = useNavigate();

  const [userInput, setuserInput] = useState("");
  const [searchDist, setsearchDist] = useState({});
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    if(user){
      setisLoggedIn(true)
      navigate("/");
    }
  },[])
  const searchDistrict = () => {
    
      if(isLoggedIn){
        axios.get("http://localhost:3000/districts").then((res) => {
            console.log(res.data);
            let dist = res.data.find(
              (d) => d.constituencies.indexOf(userInput) > -1
            );
            setsearchDist(dist);
          });
      }else{
          alert("You Are Not Logged in ... Please Login to See the District Details")
          navigate("/login");
        }
   
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label  className="form-label">
                  Enter Assembly Constituency
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={userInput}
                  onChange={(e) => {
                    setuserInput(e.target.value);
                  }}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={searchDistrict}
              >
                Find District
              </button>
            </form>
          </div>
          {searchDist.districtName && (
            <div className="col">
              <h2>Your New District Name is : {searchDist.districtName}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
