import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddDistrict = () => {

    const [district, setDistrict] = useState({districtName:"",constituencies:[]});
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
        axios.post("http://localhost:3000/districts",district).then((res)=>{
            alert("New district added sucessfully");
            navigate("/admin-dashboard");
        })
    }
    const handleBackButtonClick = () => {
        navigate("/admin-dashboard")
    }

  return (<div>
    <div className='row'>
        <div className='col-4'></div>
        <div className='col-3'>
            <h3 className='App'>Add New District</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="district" className="form-label">District</label>
                    <input type="text" name="districtName" className="form-control" id="district" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="constituencies" className="form-label">constituencies</label>
                    <input type="text" name="constituencies" className="form-control" id="constituencies" onChange={handleChange} />
                    {/* <button type="button" className="btn btn-primary App" onClick={handleAdd}>Add another constituencies</button> */}
                </div>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-primary App" onClick={handleAdd}>Add</button>
                    <button onClick={handleBackButtonClick} className='btn btn-primary'>Back</button>
                </div>
            </form>
        </div>
    </div>
</div>);};
//   <div class="container">
//     <form>
//         <div className='md-3'>
//         <label >District</label>
//         <input type="text" value={district.district} name="district" onChange={handleInputChange}/>
//         </div>
//         <div className='md-3'>
//         <label >constituencies</label>
//         <input type="text" value={district.constituencies} name="constituencies" onChange={handleInputChange}/>
//         </div>
//     </form>
//   </div>);
// };
