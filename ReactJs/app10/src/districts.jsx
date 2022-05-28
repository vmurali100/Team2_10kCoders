import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const Districts = () => {
    let navigate=useNavigate()
    const [userinput, setuserinput] = useState("")
    const[searchdist,setsearchdist]=useState({})
    const[isloggedin,setisloggedin]=useState(false)

    const searchdistrict=()=>{
       
        if(isloggedin){
            axios.get("http://localhost:3000/districts").then(response=>{
                let dist=response.data.find(d=>d.constituencies.indexOf(userinput)>-1)
        
                setsearchdist(dist)
            })
        }else{
           alert ("you are not loggedin...please login to see the district details")
           navigate("/login")
        }
       
    }
    useEffect(()=>{
        let user=JSON.parse(localStorage.getItem("loggedinuser"))
    if(user){
        setisloggedin(true)
        navigate("/")
    }
    },[])
    return (
        <div>
            <div className="container">
               <div className="row">
                   <div className="col">
                   <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter assembly constituency</label>
                        <input type="email" className="form-control" value={userinput} onChange={(e)=>{setuserinput(e.target.value)}}/>
                    </div>

                    <button type="button" onClick={searchdistrict} className="btn btn-primary">finddistrict</button>
                </form>
                   </div>
                  {searchdist.districtName&& <div className="col">
                       <h2>your new district name is:{searchdist.districtName}</h2>
                   </div>}
               </div>
            </div>

        </div>
    )
}
