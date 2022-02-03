import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getDistrictsDataAction } from "../Actions";

 const Home = (props) => {
    const [ search ,setSearch] = useState("");
    const [userLoggedIn ,setUserLoggedIn] = useState(false)

    const handlechange =(e)=>{
            setSearch(e.target.value);
    }
    useEffect(()=>{
      localStorage.setItem("input", JSON.stringify(search))
    })
  //  const getDitrict =() =>{
  //     //  props.districtsList.find()
  //      console.log(props);
  //      console.log(props.districtsList)
  //  }
  console.log(props);
   console.log(props.districtsList)
  
  return (
    <div>
      <div className="container" style={{margin : "150px auto"}}>
       <div className="row">
       <div className=" col-4"></div>
        <div className=" col-4">
          <form>
            <div class="mb-3">
              <label class="form-label">Enter Contituency</label> <br />
              <input type="text" onChange={(e)=>handlechange(e)}  value={search}/>
            </div>
            <button type="button" class="btn btn-primary" onClick={()=>{props.getDistrictFunc()}}>
              Get District
            </button>
          </form> <br />
          {props.districtsList != null ? <h1>{props.districtsList.dist}</h1> : ""}
        </div>
        <div className="col-4"></div>
       </div>
      </div>
    </div>
  );


  }
  const MSTP =(state)=>{
    return {
        districtsList : state,
    }
}
const MDTP =(dispatch)=>{
    return {
        getDistrictFunc : ()=>dispatch(getDistrictsDataAction()) ,
    }
}
  


export default connect(MSTP ,MDTP)(Home)
