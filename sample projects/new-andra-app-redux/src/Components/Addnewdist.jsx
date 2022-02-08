import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { AddnewdistAction } from "../Actions";

const Addnewdist =(props)=>{
    const navigate = useNavigate()
    const {addnewdistFunc}=props
    const [addnew, setaddNew] = useState({
        dist: "",
        // consti : [],
      });
      const [area, setArea] = useState("");
      const handleChange1 = (e) => {
        let newone = { ...addnew };
    
        newone[e.target.name] = e.target.value;
    
        setaddNew(newone);
      };
      const handleChange2 = (e) => {
        setArea(e.target.value);
      };
      const addnewdist = () => {
        var constiClone = area.split(",")
        var constiuencies = [...constiClone];
        // constiuencies.push(area);
        var addnewone = { ...addnew , constiuencies};
        // Object.assign(addnewone, constiClone)
       
        console.log(addnew);
        addnewdistFunc(addnewone , ()=>navigate("/"))
      };
    
      return (
        <div>
          <h1>Add New Dist</h1>
          <div className="container">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <form>
                  <div class="mb-3">
                    <label class="form-label">District</label>
                    <input
                      type="text"
                      class="form-control"
                      value={addnew.dist}
                      name="dist"
                      onChange={(e) => handleChange1(e)}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Constuencey</label>
                    <input
                      type="text"
                      class="form-control"
                      value={area}
                      name="area"
                      onChange={(e) => handleChange2(e)}
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={()=>addnewdist()}
                  >
                    ADD
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
    return{

    }
}
const MDTP =(dispatch)=>{
return{
    addnewdistFunc : (newdist , x)=>dispatch(AddnewdistAction(newdist , x))
}
}
export default connect(MSTP ,MDTP)(Addnewdist)