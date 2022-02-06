import React from "react";
import { connect } from "react-redux";

const Profile =(props)=>{
    var {profiledata} =props
    var profiledata = profiledata.profiledata
    console.log(props)
    return (
        <div>
            <center>welcome to profile component</center>
           <div className="container">
               <div className="row">
                   <div className="col-4"></div>
                   <div className="col-4">{<div>
                       <img src={profiledata.img} alt="logo"/>
                       {profiledata.name} <br />
                       {profiledata.email} <br />
                       {profiledata.name} <br />
                       {profiledata.phone} <br />
                   </div> } </div>
                   <div className="col-4"></div>
               </div>
           </div>
        </div>
    )
}
const MSTP =(state)=>{
    return {
     profiledata : state
    }
}
export default  connect(MSTP)(Profile)