import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { delete_dist_action, get_all_users_action, update_dist_action } from '../redux/actions';
import { AdminDashboard } from './AdminDashboard';

export const DeleteDistrict = (props) => {

    const { districts, getData, deleteData, updateData } = props;
    
    const [allDist, setAllDist] = useState([]);
    const navigate = useNavigate();
    let { id } = useParams();
    const [dist, setDist] = useState({
        districtName: "",
        constituencies: []
    });
    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {

        if(districts)
        {
            setAllDist(districts)
            const setIdDist = () => {
                const val = districts.find(d => d.id == id);
                console.log("val", val);
                setDist(val);
            }
            setIdDist();
        }
       
    }, [districts]);
    
    const handleDeleteDist = () => 
    {
        if (window.confirm(`Do you want to delete '${dist.districtName}' district with all its constituencies? `))
        {
            delPromiseDist();
            getData();
            navigate("/admin-dashboard");
        }
    }

    const delPromiseDist = () => {
        deleteData(id);
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
        updateData(data,id)
    }
    return (

        <div className="container">
            <div className='row'>
                <div className='col'></div>
                <div className="col">
                    <table className='table'>
                        <tbody>
                            <tr>
                                 <td><h3>District</h3></td>
                            </tr>
                            <tr>
                                <th>
                                    {dist && dist.districtName}
                                </th>
                                <td><button className="btn btn-danger " onClick={handleDeleteDist}>Delete All</button></td>
                            </tr>
                            <tr><td><h3>Constituencies</h3></td></tr>
                            {
                               dist && dist.constituencies.map((cons, i) => {
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
const mapStateToProps = (state) => {
    return {
        districts: state.districtReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(get_all_users_action()),
        updateData: (dist,id) => dispatch(update_dist_action(dist,id)),
        deleteData: (id) => dispatch(delete_dist_action(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteDistrict);
