import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { get_all_users_action, update_dist_action } from '../redux/actions';




export const EditDistrict = (props) => {

    const { districts, getData, updateData } = props;
    console.log("Edit component: state prop before dipatching getdata func", districts);
    let { id } = useParams();
    const navigate = useNavigate();
    const [allDist, setAllDist] = useState([]);
    const [dist, setDist] = useState({
        districtName: "",
        constituencies: []
    });
    const [newConst, setnewConst] = useState("");

    useEffect(() => {
        getData();
        console.log("Edit component: dispatched getData method");
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

    const handleUpdate =() => {
        updateData(dist,id);
        getData();
        navigate("/admin-dashboard")
    }

    const handleAdd = async () => {
        const distCopy = { ...dist };
        distCopy.constituencies.push(newConst);
        setDist({
            districtName: distCopy.districtName,
            constituencies: distCopy.constituencies
        });
        setnewConst("");
    }

    const handleBackButtonClick = () => {
        navigate("/admin-dashboard")
    }
    const handleConstitencies = () => {
        return <>
            {
                dist && dist.constituencies.map((cons, i) => {
                    return (<div className='input-group mb-3'>
                        <input type="text" key={i} name="constituencies" className="form-control" value={dist.constituencies[i]} onChange={(e) => { handleChangeConst(i, e) }} />
                        <button className="btn btn-primary" type="button" onClick={() => handleRemoveConst(i)}>Remove</button>
                    </div>)
                })
            }
        </>
    }
    const handleRemoveConst = (i) => {
        const distCopy = { ...dist };
        distCopy.constituencies.splice(i, 1);
        setDist({
            districtName: distCopy.districtName,
            constituencies: distCopy.constituencies
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
{                            dist && <input type="text" name="districtName" className="form-control" value={dist.districtName} onChange={(e) => { handleChangeConst(0, e) }} />
}                        </div>

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
const mapStateToProps = (state) => {
    return {
        districts: state.districtReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(get_all_users_action()),
        updateData: (dist,id) => dispatch(update_dist_action(dist,id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditDistrict);