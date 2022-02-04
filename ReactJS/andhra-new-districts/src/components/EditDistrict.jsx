import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { render } from '@testing-library/react';




export const EditDistrict = () => {


    let { id } = useParams();
    const navigate = useNavigate();

    const [dist, setDist] = useState({
        districtName: "",
        constituencies: []
    });
    const [newConst, setnewConst] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            let data = await getData();
            setDist(data);
        }
        fetchData();
    },[])
    const getData = () => {
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:3000/districts/" + id).then((res) => {
                resolve(res.data)
            })
        })
    }

    const handleChangeConst = (i, e) => {


        let obj = { ...dist }; //copying object
        let Holder = e.target.value; //capturing input value into holder

        if (e.target.name === "constituencies") {
            obj[e.target.name][i] = Holder
        }
        else {
            obj[e.target.name] = Holder;
        }

        setDist(obj);

    }

    const handleUpdate = async () => {
        console.log("handle called");
        await editPromise();
        navigate("/admin-dashboard")
    }

    const editPromise = () => {
        console.log("checking", id, dist);
        return new Promise((resolve, reject) => {
            axios.put("http://localhost:3000/districts/" + id, dist).then((res) => {
                alert("updated sucessfully...")
                resolve(res.data)

            })
        })
    }
    const handleAdd = async () => {
        const distCopy = {...dist};
        distCopy.constituencies.push(newConst);
        setDist({
            districtName : distCopy.districtName,
            constituencies : distCopy.constituencies
        });
        setnewConst("");
    }
    
    const handleBackButtonClick = () => {
        navigate("/admin-dashboard")
    }
    const handleConstitencies = () => {
        return <>
            {
                dist.constituencies.map((cons, i) => {
                    return (<div className='input-group mb-3'>
                        <input type="text" key={i} name="constituencies" className="form-control" value={dist.constituencies[i]} onChange={(e) => { handleChangeConst(i, e) }} />
                        <button className="btn btn-primary" type="button" onClick={()=>handleRemoveConst(i)}>Remove</button>
                    </div>)
                })
            }
        </>
    }
    const handleRemoveConst = (i) => {
        const distCopy = {...dist};
        distCopy.constituencies.splice(i,1);
        setDist({
            districtName : distCopy.districtName,
            constituencies : distCopy.constituencies
        });
    }

    return (
        <div className="container">
            <div className='row'>
            <div className='col'></div>
                <div className='col'>
                    <h2 className="App">Edit and Update Form</h2>
                    <form>
                        <div className='md-3'>
                            <label className="form-label ">District </label>
                            <input type="text" name="districtName" className="form-control" value={dist.districtName} onChange={(e) => { handleChangeConst(0, e) }} />
                        </div>

                        <div className="md-3">
                            <label className='form-label '>Constituencies</label>
                            {
                                handleConstitencies() 
                            }
                        </div>
                        
                        <div className="mt-3 input-group">
                            <input type="text" name="newConst" value={newConst} className="form-control" placeholder="Add new Constituency" onChange={(e) => setnewConst(e.target.value)} />
                            <button type="button" onClick={handleAdd} type="button" className="btn btn-info" >Add</button>
                        </div>

                        <div className="mt-3">
                            <button onClick={handleUpdate} type="button" className="btn btn-info" style={{ marginRight: 10 + "px" }}>Update</button>
                            <button onClick={handleBackButtonClick} className='btn btn-primary'>Back</button>
                        </div>


                    </form>

                </div>
                <div className='col'></div>
            </div>
        </div>
    );
};
