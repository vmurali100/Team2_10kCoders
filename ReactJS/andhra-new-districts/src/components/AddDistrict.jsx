import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddDistrict = () => {

    const [district, setDistrict] = useState({districtName:"",constituencies:[]});
    const [newConst, setnewConst] = useState("");
    const navigate = useNavigate();
    const handleChange = (e)=>{
        let obj = {...district}
        let cons = [];
        let Holder = e.target.value;
        obj[e.target.name] = Holder;

        if(e.target.name === "constituencies")
        {
            cons = Holder.split(",")
        }
        obj["constituencies"] = cons;
        setDistrict(obj);
    }
    const handleAdd = () =>
    {
        if(district.districtName !== "")
        {
            axios.post("http://localhost:3000/districts",district).then((res)=>{
            alert("New district added sucessfully");
            navigate("/admin-dashboard");
        })
        }
        else{
            alert("please provide District name")
        }
        
    }
    const handleBackButtonClick = () => {
        navigate("/admin-dashboard")
    }
    const handleRemoveConst = (i) => {
        const distCopy = {...district};
        distCopy.constituencies.splice(i,1);
        setDistrict({
            districtName : distCopy.districtName,
            constituencies : distCopy.constituencies
        });
    }

    const handleConst = () =>{
        return <>
        {
            district.constituencies.map((cons, i) => {
                return (
                    <div className='input-group mb-3'>
                        <input type="text" key={i} name="constituencies" className="form-control" value={district.constituencies[i]} onChange={(e) => { handleChangeConst(i, e) }} />  
                        <button className="btn btn-primary" type="button" onClick={()=>handleRemoveConst(i)}>Remove</button>
                    </div>
                    )
            })
        }
    </>
    }
    const handleAddConst = () =>
    {
        const distCopy = {...district};
        distCopy.constituencies.push(newConst);
        setDistrict({
            districtName : distCopy.districtName,
            constituencies : distCopy.constituencies
        });
        setnewConst("");
    }
    const handleChangeConst = (i, e) => {


        let obj = { ...district }; //copying object
        let Holder = e.target.value; //capturing input value into holder

        if (e.target.name === "constituencies") {
            obj[e.target.name][i] = Holder
        }
        else {
            obj[e.target.name] = Holder;
        }

        setDistrict(obj);

    }

  return (<div>
    <div className='row'>
        <div className='col-4'></div>
        <div className='col-3'>
            <h3 className='App'>Add New District</h3>
            <form className="form-inline">
                <div className="mb-3">
                    <label htmlFor="district" className="form-label">District</label>
                    <input type="text" name="districtName" className="form-control" id="district" onChange={handleChange} />
                </div>
                <label htmlFor="constituencies" className="form-label">constituencies</label>
                
                <div>
                    {
                        handleConst()
                    }
                </div>

                <div className="mb-3 input-group">
                   
                   <input type="text" name="constituencies" className="form-control" value={newConst} onChange={(e) => setnewConst(e.target.value)} />
                   <button type="button" className="btn btn-primary App" onClick={handleAddConst}>Add constituencies</button>
               </div>

                <div className="d-flex">
                    <button type="button" className="btn btn-primary flex-grow-1 " style={{marginRight: 5+"px"}}onClick={handleAdd}>Add District</button>
                    <button type="button" onClick={handleBackButtonClick} className='btn btn-primary flex-grow-1' style={{marginLeft: 5+"px"}}>Back</button>
                </div>
            </form>
        </div>
    </div>
</div>);};
