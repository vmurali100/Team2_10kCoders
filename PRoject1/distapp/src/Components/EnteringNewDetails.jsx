import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const EnteringNewDetails = () => {

    let navigate = useNavigate()

    const [newdistrict, setnewdistrict] = useState(
        {districtName:"",}
    );

    const handleChange = (e)=>{
        let newval = {...newdistrict}
        if(e.target.name == "constituencies"){
           var constituencies = e.target.value.split(",")
           var newvariable = {...newdistrict,constituencies}
           setnewdistrict(newvariable)
           console.log(newdistrict);
          
        }
        else{
            newval[e.target.name] = e.target.value
            setnewdistrict(newval)
        }
    }

    const handleSubmit = ()=>{
        axios.post("http://localhost:3000/districts",newdistrict)
        alert("New District Has Been Posted..")
        navigate("/admindatapage1")
    }
  return <div>
      <form>
      <h1 id="h1a">This is For Entering New Districts and Constituencies</h1>
            <div className="mb-3">
                <label htmlFor='districts' className="form-label">Enter Districts</label>
                <input type="text" className="form-control" name="districtName" value={newdistrict.districtName}
                onChange={(e)=>{handleChange(e)}}
                />
                   
            </div>
            <div className="mb-3">
                <label htmlFor='Constituencies' className="form-label">Constituencies</label>
                <input type="text" className="form-control"  name="constituencies" value={newdistrict.constituencies}
                    onChange={(e)=>{handleChange(e)}}
                />
            </div>
            <div className="mb-3 form-check">
 
                <button type="button" className="btn btn-primary" onClick={()=>{handleSubmit()}} >Submit</button>
                </div>
        </form>
  </div>;
};
