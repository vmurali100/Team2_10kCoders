import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

 const Home = () => {
    const [ search ,setSearch] = useState("")

    const handlechange =(e)=>{
            setSearch(e.target.value);
            console.log(search)
    }
   const getDitrict =() =>{
       props.districtsList.find()
   }
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
            <button type="button" class="btn btn-primary" onClick={getDitrict}>
              Get District
            </button>
          </form>
        </div>
        <div className="col-4"></div>
       </div>
      </div>
    </div>
  );


  }
  const MSTP =(state)=>{
    return {
        districtsList = state ,
    }
}
const MSTP =(dispatch)=>{
    return {
        getDistrictFunc = ()=>(dispatch()) ,
    }
}
  


export default connect(MSTP ,MDTP)(Home)
