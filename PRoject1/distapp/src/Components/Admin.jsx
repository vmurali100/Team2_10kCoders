import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { NavComp } from './NavComp';

export const Admin = () => {
    let navigate = useNavigate()
    const [admin, setadmin] = useState({email:"",password:""});
    const [adminvalid, setadminvalid] = useState(false);

    const handleChange = (e)=>{
        let newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value
        setadmin(newAdmin)
    }

    const handleclear = ()=>{
        setadmin({email:"",password:""})
    }
    
    const getAdmin = ()=>{
        return new Promise((resolve,reject)=>{
            axios.get("http://localhost:3000/admin").then((res)=>{
                resolve(res.data)
                
            })
        }) 
    }

    const handleSubmit = async()=>{
        let adminlog = await getAdmin()
        let admincheck = adminlog.find((ad)=>ad.email==admin.email)
        if(admincheck){
            setadminvalid(true)
        }
        else{
            alert("You have Entered Wrong credentails...Please enter correct data")
            handleclear()
        }
        
    }
  return <div>
      <form>
            <h1 id="h1a">This is Admin Login Page</h1>
            <div className="mb-3">
                <label htmlFor='email' className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' value={admin.email} 
                    onChange={(e)=>{handleChange(e)}}
                />
                   
            </div>
            <div className="mb-3">
                <label htmlFor='password' className="form-label">Password</label>
                <input type="password" className="form-control"  name='password' value={admin.password} 
                    onChange={(e)=>{handleChange(e)}}
                />
            </div>
            <div className="mb-3 form-check">

                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
        </form>
        {adminvalid && navigate("/admindatapage1")}
  </div>;
};
