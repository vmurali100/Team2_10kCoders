import React, { useState } from 'react';
import { connect } from 'react-redux';
import { delete_dist_action, get_all_users_action, updateStateAction, update_dist_action } from '../redux/actions';
import { useEffect } from 'react';


const Home = (props) => {
    const { districts, getData, delDist, updateDist, updateState } = props;
    const [input, setInput] = useState("");
    const [ans, setAns] = useState("");
    const [isDelete, setIsDelete] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isId, setisId] = useState(null);
    const [alldist, setalldist] = useState()



    useEffect(() => { getData() }, []);

    useEffect(()=>{
        setalldist(districts)
    },[districts])
    

    function handleInput(e) {
        setInput(e.target.value);
        setAns("")
    }

    function handleButton() {
        let district = alldist.find(d => d.constituencies.indexOf(input.toLowerCase()) > -1)
        if (district !== undefined) {
            setAns(district.districtName)

        }
        else {
            setAns("Invalid")
        }
        setInput("");
    }

    
    const handleAddDistrict = () => {
        console.log("add dist");
    }

    // Delete section
    const handleDelete = (id) => {
        setIsDelete(true)
        setIsEdit(false);
        setisId(id)
    }

    const handleDeleteDist = (dist) => {
        delDist(dist.id);
    }

    const handleDeleteConst = (dist,index) => {
        let distCopy = {...dist};
        distCopy.constituencies.splice(index,1);
        updateDist(distCopy)
        console.log(distCopy);
    }

    //handle cancel button
    const handleCancel = () => 
    {
        setIsEdit(false);
        setIsDelete(false);
        setisId(null);
    }

    //Edit section

    const handleEditDist = (dist) => {
        delDist(dist.id);
    }

    const handleEditConst = (dist,index) => {
        // let distCopy = {...dist};
        // distCopy.constituencies.splice(index,1);
        // updateDist(distCopy)
        // console.log(distCopy);
    }

    const handleEdit = (id) => 
    {
        setisId(id);
        setIsEdit(true);
        setIsDelete(false);
    }

    const handleChange = (i,e,d) => {
        let distClone = {...d};
        console.log(i, e.target.value, d);
        if(i === null)
        {
            
            distClone.districtName = e.target.value;
        }
        else{
            distClone.constituencies[i] += e.target.value;
        }

        updateState(distClone);

    }

    return (
        <div>
            <div className="container">
                <div className="row">


                    {/* Search box */}
                    <div className="col-md-5 mx-auto">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" value={input} placeholder="Search with Assembly constituencies name" onChange={handleInput} />
                            <button className="btn btn-outline-success" type="button" onClick={() => handleButton()}>Find District</button>
                        </form>
                        <div className='row' style={{ marginTop: 50 + "px" }}>

                            {
                                <p className='App'>Your new district is <strong>{ans}</strong> </p>
                            }



                        </div>

                    </div>

                </div>
                <div className='row'>
                    {/* displaying all the districts and their constistencies */}
                    <div className="col App">
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
                                    alldist.map((d, i) => {
                                        return (
                                            < >
                                                {

                                                    (<tr key={d.id}>
                                                        <td>{i + 1}</td>
                                                        {
                                                            (isEdit && isId === d.id)? <input value={d.districtName} onChange={(e)=>handleChange(null,e,d)}/> : <th key={i}>{d.districtName}</th>
                                                        }
                                                        <td>
                                                            <ul className='list-group'>
                                                                {
                                                                    d.constituencies.map((c, ind) => 
                                                                    {
                                                                        return <>
                                                                        {
                                                                            isId === d.id ?  
                                                                            (
                                                                                isDelete 
                                                                                ? 
                                                                                <li className='list-group-item' style={{ border: 0 }}>{c} <button className="btn btn-danger" onClick={() => { handleDeleteConst(d,ind) }}>Delete</button></li> 
                                                                                : 
                                                                                <li className='list-group-item' style={{ border: 0 }}><input value = {c} onChange={(e) =>{handleChange(ind,e,d) }}/></li>
                                                                            )
                                                                            :
                                                                            (<li className='list-group-item' style={{ border: 0 }}>{c}</li>)
                                                                        }</>
                                                                    })
                                                                }
                                                            </ul>
                                                        </td>
                                                        {/* <td><button className="btn btn-warning" onClick={() => { handleEdit(d) }}>Edit</button></td> */}
                                                        {
                                                            (isEdit && isId === d.id) ? 
                                                            <td>
                                                                <button className="btn btn-success" onClick={() => { handleEditDist(d) }}>Save</button>
                                                                <button className="btn btn-primary" onClick={() => { handleCancel() }}>Cancel</button>
                                                            </td> 
                                                            :
                                                            <td>
                                                                <button className="btn btn-warning" onClick={() => { handleEdit(d.id) }}>Edit</button>
                                                            </td>
                                                        }
                                                        {
                                                            (isDelete && isId === d.id) ? 
                                                            <td>
                                                                <button className="btn btn-danger" onClick={() => { handleDeleteDist(d) }}>Delete All</button>
                                                                <button className="btn btn-primary" onClick={() => { handleCancel() }}>Cancel</button>
                                                            </td> 
                                                            :
                                                            <td>
                                                                <button className="btn btn-danger" onClick={() => { handleDelete(d.id) }}>Delete</button>
                                                            </td>
                                                        }
                                                    </tr>)

                                                }


                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        districts: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(get_all_users_action()),
        delDist: (id) => dispatch(delete_dist_action(id)),
        updateDist: (districts,id) => dispatch(update_dist_action(districts,id)),
        updateState : (distClone)=> dispatch(updateStateAction(distClone))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
