import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminDashboard } from './AdminDashboard';

export const DeleteDistrict = () => {

    const navigate = useNavigate();
    let { id } = useParams();
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
    const handleDeleteDist = async() => 
    {
        if (window.confirm(`Do you want to delete '${dist.districtName}'?`))
        {
            let data = await delPromiseDist();
            console.log("data ",data);
            navigate("/admin-dashboard");
            alert("District and Constituencies are deleted");
        }
    }

    const delPromiseDist = () => {
        return new Promise((resolve, reject) => {
            axios.delete("http://localhost:3000/districts/" + dist.id).then((res) => {
                resolve(res.data)
            })
        })
    }

    //handle delete
    const handleDeleteConst = async (i) => {
        let newConst = [...dist.constituencies];
        if (window.confirm(`Do you want to delete '${dist.constituencies[i]}'?`)) {
            let newrecord = dist.constituencies.filter((item, index) => index != i)
            console.log('update data', newrecord)
            // newConst.splice(i+1,);
            setDist({
                districtName: dist.districtName,
                constituencies: newrecord
            })
            console.log('before', dist)
            let updateddata = await delPromise({
                districtName: dist.districtName,
                constituencies: newrecord
            });
            alert("Deleted sucessfully")
        }

    }

    //delete promise
    const delPromise = (data) => {
        return new Promise((resolve, reject) => {
            console.log("cg\hecking", id, dist, data);
            axios.put("http://localhost:3000/districts/" + id, data).then((res) => {
                resolve(res.data)
            })
        })
    }
    return (

        <div className="container">
            <div className='row'>
                <div className='col'></div>
                <div className="col">
                    {/* <ul className="list-group">
            <li className="list-group-item">
                <strong>{dist.districtName}</strong> &nbsp;&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </li>
            {
                dist.constituencies.map((cons)=>{
                    return <li className="list-group-item">
                        <strong>{cons}</strong> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    </li>
                })  
            }
         </ul> */}
                    <table className='table'>
                        <tbody>
                            <tr>
                                 <td><h3>District</h3></td>
                            </tr>
                            <tr>
                                <th>
                                    {dist.districtName}
                                </th>
                                <td><button className="btn btn-danger" onClick={handleDeleteDist}>Delete</button></td>
                            </tr>
                            <tr><td><h3>Constituencies</h3></td></tr>
                            {
                                dist.constituencies.map((cons, i) => {
                                    return (
                                        <tr>
                                            <td>
                                                <strong>{cons}</strong>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => { handleDeleteConst(i) }}>Delete</button>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col">
                    <button className='btn btn-primary'onClick={()=>{navigate("/admin-dashboard")}}>Back</button>
                </div>
            </div>
        </div>);
};
