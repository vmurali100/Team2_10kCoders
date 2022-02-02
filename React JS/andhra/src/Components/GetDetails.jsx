import React,{useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


export const GetDetails = () => {
    let navigate = useNavigate();

    const [addDetails, setaddDetails] = useState([]);

    const edit = (index) => {
        localStorage.setItem('editUser', JSON.stringify(addDetails[index]))
        console.log(addDetails[index]);
        navigate("/addDistrict")

        
    }

    const deletePerson = (index) => {
        console.log('You called ',index)
        let deletedata = addDetails.splice(index,1)
        localStorage.setItem('addDetails',JSON.stringify(deletedata));
        console.log(deletedata);
        // setaddDetails(addDetails)
    }

    const getData = () => {
        axios.get(" http://localhost:3000/districts").then(res => {
            setaddDetails(res.data)
        })
    }

    const getHome = () => {
        navigate("/")
    }

    const getAddUser=()=>{
        navigate("/addDistrict")
    }

    return <div >
        <button style={{ marginBottom: "20px" }} type="button" className="btn btn-primary" onClick={getData}>
            Get Data
        </button><br />
        <button style={{ marginBottom: "30px"}} type="button" className="btn btn-primary" onClick={getHome}>
            Home
        </button><br />
        <button style={{ marginBottom: "30px"}} type="button" className="btn btn-primary" onClick={getAddUser}>
            Add User
        </button><br />

        <table className="table">
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>District</th>
                    <th>Consistuency</th>
                    <th>Edit</th>
                    <th>Delete</th>

                </tr>
            </thead>
            <tbody>
                {addDetails.map((e, index) => {
                    return <tr>
                        <td >{index + 1}</td>
                        <td key={e.districtName}>{e.districtName}</td>
                        {e.constituencies.map((d) => {
                            return <tr><td><ul>{d}</ul></td></tr>
                        })}
                        <td><button className="btn btn-warning" onClick={() => { edit(index) }}>Edit</button> </td>
                        <td><button className="btn btn-danger" onClick={() => { deletePerson(index) }}>Delete</button> </td>
                    </tr>


                })}

            </tbody>
        </table>


    </div>;
};
