import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Admin = ()=>{
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4"><button type="button"><Link to="admin">Admin</Link></button></div>
            </div>
        </div>
    </div>
}

export const AdminDash =()=>{
const [admin , setAdmin ] = useState({
    email : "" ,
    password : ""
});

const navigate =useNavigate();
const handlechange = (e)=>{
    let newuser = {...admin} ;
    newuser[e.target.name] = e.target.value ;
   setAdmin(newuser)
   
} ;

const getadmin = async()=>{
    console.log(admin)
let adminhere = await getadminprom();
if(admin.email === adminhere.username && admin.password === adminhere.password){
    navigate("/admindashboard")
  }else {
      console.log("wrong")
  }
}
const getadminprom = ()=>{
    return new Promise ((res ,rej)=>{
        axios.get('http://localhost:3000/admin').then(({data})=>{
            res(data)
            console.log(data)
    })
    
   
    })
}

    return <div>
          <div className="container" style={{"marginTop" : "80px"}}> 
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                <form className="loginform">
                    <h2> Admin Log In</h2>
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" value={admin.email} onChange={(e)=>{handlechange(e)}} name="email" />
    </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" value={admin.password} onChange={(e)=>{handlechange(e)}} name="password" />
  </div>
  
  <button type="button" class="btn btn-primary" onClick={getadmin}>Log In</button> 
  
</form> 



                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
}

export const Admindashboard =()=>{
    const [users , setUsers] = useState([]);
    const [dists ,setDists] = useState([]);
const getUsers =()=>{
     axios.get("http://localhost:3000/user").then(({data})=>{
         setUsers(data);

     })
}
const getDist =()=>{
    
}
    return <div>
       <div className="container">
           <div className="row">
               <div className="col-4"></div>
               <div className="col-4"> 
               <button type="button" onClick={getUsers}>GET USERS</button><button  type="button" onClick={getDist}>GET DISTRICTS</button>
               </div>
               <div className="col-4"></div>
           </div>
       </div> <br />
       <div className="container">
           <div className="row">
               <div className="col-4"></div>
               <div className="col-4"> 
              <table>
                 
                  <thead>
                      <tr>
                          <td>Email</td>
                          <td>Password</td>
                      </tr>
                  </thead>
                  <tbody>

                  </tbody>
              </table>
               </div>
               <div className="col-4"></div>
           </div>
       </div>
    </div>
}