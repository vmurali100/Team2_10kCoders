import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


export const AddDetails = () => {
    let navigate = useNavigate();

    const [district, setdistrict] = useState({
        districtName: '',
        // constituencies: ['']
    });
    const [constituency, setconstituency] = useState("");



    const handleChange = (e) => {
        let addDistrict = { ...district };
        addDistrict[e.target.name] = e.target.value;
        setdistrict(addDistrict);
    };
    const handleChange2 = (e) => {
        setconstituency(e.target.value);
    };

    const handleSubmit = () => {
        // var constituencies = []
        // var newConstituencies=[...constituencies]
        // newConstituencies.push(constituency)

        var newConstituencies = []
        var constituencies = [...newConstituencies]
        var newDist = { ...district, constituencies }
        constituencies.push(constituency)

        // Object.assign(district,newConstituencies)
        axios.post("http://localhost:3000/districts", newDist).then(res => {
            alert("Details Added Successfully")
            navigate("/getdetails")

        })
        console.log(district, constituency);

    }


    return <div>
        <div style={{ backgroundColor: "pink", width: "900px" }} className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form><br />
                        <h2>Add New Details</h2><br />
                        <div className="mb-3">
                            <label className="form-label">
                                Add District
                            </label>
                            <input
                                placeholder="Enter New District"
                                type="text"
                                className="form-control"
                                value={district.districtName}
                                name="districtName"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Add Constituency
                            </label>
                            <input
                                placeholder="Add new Constituency"
                                type="text"
                                className="form-control"
                                value={constituency}
                                name="constituency"
                                onChange={(e) => {
                                    handleChange2(e);
                                }}
                            />
                        </div>


                        <button style={{ marginBottom: "30px" }} type="button" className="btn btn-primary" onClick={handleSubmit}>
                            Add
                        </button><br />
                    </form>
                </div>
                <div className="col"></div>

            </div>

        </div>
    </div>;
};

