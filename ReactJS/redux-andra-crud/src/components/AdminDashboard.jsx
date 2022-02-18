import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"
import { get_all_users_action } from '../redux/actions';

    const AdminDashboard = (props) => {
    const {districts, getData } = props;

    const navigate = useNavigate();
    const [dist, setDist] = useState([]);

    useEffect(() => {getData();
        
    }, [])

    useEffect(() => {
        setDist(districts);
    }, [districts])

    const handleEdit = (id) => {
        console.log("edit button clicked: ", id);
        navigate("edit-district/" + id);
        get_all_users_action();
    }

    const handleAddDistrict = () => {
        navigate("add-district")
    }

    const handleDelete = (id) => {
        navigate("delete-district/" + id)
    }
    return (
        <div className='container'><div className='row'>
            {/* displaying all the districts and their constistencies */}
            <div className="col App">
                <h1>Admin Dashboard</h1>
                <button className='btn btn-primary' onClick={handleAddDistrict}>Add District</button>
                <h2 style={{ color: "grey", fontSize: "25px", marginTop: 50 + "px", marginBottom: 50 + "px" }}>Districts and Assembly constituencies</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>District</th>
                            <th>Constituencies</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dist.map((d, i) => {
                                return (
                                    <>
                                <tr>
                                    <td>{i+1}</td>
                                    <th key={i}>{d.districtName}</th>
                                    <td>
                                    <ul className='list-group'>
                                    {
                                        d.constituencies.map((c, i) => {
                                            return <li className='list-group-item' style={{border: 0}}>{c}</li>
                                        })
                                    }
                                    </ul></td>
                                    <td><button className="btn btn-warning" onClick={() => { handleEdit(d.id) }}>Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={() => { handleDelete(d.id) }}>Delete</button></td>
                                </tr>
                                
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div></div>);
};
const mapStateToProps = (state) => {
    return {
        districts: state.districtReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(get_all_users_action()),
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
