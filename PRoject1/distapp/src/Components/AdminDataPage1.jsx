import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminDataPage1 = () => {
    const [data1, setdata1] = useState([]);
    const [editval, seteditval] = useState({districtName:"",constituencies:[],id:""});
   
    let navigate = useNavigate();

    const getPromiseData = () => {
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:3000/districts").then((res) => {
                resolve(res.data)
            })
        })
    }

    const getData = async () => {
        let data2 = await getPromiseData()
        setdata1(data2)
    }

    const enterNewDistrict = () => {
        navigate("/enterNewDetais")
    }
    

    const handleChange = (e)=>{
        var newval = {...editval}
        for(var a in newval){
            if(a!= "constituencies"){
                newval[a] = document.getElementById(a).value
                seteditval(newval)
            }
            else{
                var constituencies = document.getElementById(a).value.split(",")
               newval[a] = constituencies
               seteditval(newval)
            }
        }
        console.log(editval);
    }
    const handleEdit = (d1)=>{
        var newval = {...editval}
        for(var a in d1 ){
            document.getElementById(a).value = d1[a]  
    }     
    console.log(newval); 
    }


    const handleDelete = (val)=>{
        axios.delete("http://localhost:3000/districts/" + val.id).then(()=>{
            getData()
        })
    }
    
    const handleSubmit = ()=>{
            //I took values from onChange by storing those values into usestate(editval) by onChange
            console.log("In SUb",editval);
             axios.put("http://localhost:3000/districts/"+editval.id,editval).then(()=>{
                 getData()
             })
        }
       
        
    
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-9">
                {data1 ?
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col' style={{ border: "2px solid" }}>SL.No</th>
                            <th scope="col" style={{ border: "2px solid" }}>Districts</th>
                            <th scope="col" style={{ border: "2px solid" }}>Constituencies</th>
                            <th scope='col' style={{border:"2px Solid"}}>Edit&Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data1.map((d, i) => {
                                return (
                                    <tr style={{textAlign:"center"},{border:"2px solid"}} key={i}>
                                        <td style={{ border: "2px solid" }}>{i+1}</td>
                                        <td style={{ border: "2px solid" }}>{d.districtName}</td>
                                        <td style={{ border: "2px solid" }}>
                                            {/* {d.constituencies} */}
                                            {d.constituencies.map((e) => {
                                                return (
                                                    <li style={{ listStyleType: "none" }} key={e}>{e}</li>
                                                )
                                            })}
                                        </td>
                                        <td style={{ border: "2px solid"}} type="button"  onClick={()=>{handleEdit(d)}}>Edit</td>
                                        <td style={{ border: "2px solid" }} type="button" onClick={()=>{handleDelete(d)}}> Delete</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                
            </div>
            : "There's No Data in Table"}
            
        <button id='getdetails' onClick={getData} type="button" class="btn btn-primary">Get Details</button>
        <button id="adddistrict" onClick={enterNewDistrict} type='button' class="btn btn-primary">NewDistrict</button>
                </div>
                <div className="col-3">
                <form>
      <h1 >Edit Data</h1>
            <div className="mb-3">
                <label htmlFor='districts' className="form-label">Update District</label>
                <input type="text" className="form-control"  id='districtName' onChange={(e)=>{handleChange(e)}}
                
                />
                   
            </div>
            <div className="mb-3">
                <label htmlFor='Constituencies' className="form-label">Update Constituencies</label>
                <input type="text" className="form-control"   id="constituencies" onChange={(e)=>{handleChange(e)}}
                
                />
            </div>
            <div className="mb-3">
                <label htmlFor='Constituencies' className="form-label">Update ID</label>
                <input type="text" className="form-control"   id="id" onChange={(e)=>{handleChange(e)}}
                
                />
            </div>
            <div className="mb-3 form-check">
 
                <button type="button" className="btn btn-primary" onClick={()=>{handleSubmit()}}>Update</button>
                </div>
        </form>
                </div>
            </div>
        </div>
       
    
        
    </div>;
    
};
