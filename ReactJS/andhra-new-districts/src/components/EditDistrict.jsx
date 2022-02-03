import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';




export const EditDistrict = () => {


    let { id } = useParams();
    const navigate = useNavigate();

    const [dist, setDist] = useState({
        districtName: "",
        constituencies: []
    });

    useEffect(() => {
        const fetchData = async () => {
            let data = await getData();
            setDist(data);
        }
        fetchData();
    }, [])
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

        if (e.target.name === "constituencies") 
        {
            obj[e.target.name][i] = Holder
        }
        else {
            obj[e.target.name] = Holder;
        }

        setDist(obj);

    }

    const handleUpdate = async () => {
        console.log("handle called");
        let res = await editPromise();
        navigate("/admin-dashboard")
    }

    const editPromise = () => {
        console.log("cg\hecking", id, dist);
        return new Promise((resolve, reject) => {
            axios.put("http://localhost:3000/districts/" + id, dist).then((res) => {
                alert("updated sucessfully...")
                resolve(res.data)
                
            })
        })
    }

    const handleBackButtonClick = () => {
        navigate("/admin-dashboard")
    }
    return (
        <div class="container">
            <div className='row'>
                <div className='col'></div>
                <div className='col'>
                    <h2 className="App">Update Form</h2>
                    <form>
                        <div className='md-3'>
                            <label className="form-label ">District </label>
                            <input type="text" name="districtName" className="form-control" value={dist.districtName} onChange={(e) => { handleChangeConst(0, e) }} />
                        </div>

                        <div className="md-3">
                            <label className='form-label '>Constituencies</label>
                            {
                                dist.constituencies.map((cons, i) => <input type="text" name="constituencies" className="form-control" value={dist.constituencies[i]} onChange={(e) => { handleChangeConst(i, e) }} />)
                            }
                        </div>
                        <div className="mt-3">
                            <button onClick={handleUpdate} type="button" className="btn btn-info" style={{ marginRight: 10 + "px" }}>Update</button>
                            <button onClick={handleBackButtonClick} className='btn btn-primary'>Back</button>
                        </div>


                    </form>

                </div>
                <div className='col'>
                </div>
            </div>
        </div>
    );
};
