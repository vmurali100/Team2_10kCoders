import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";
import { UpdateAction } from "../Actions";

const Edit =(props)=>{
  const navigate = useNavigate()
  const {editableUser , updateFunc } =props
  console.log(props)
  const [updateduser , setUpdateduser] = useState({
    district : "" ,
    constiuencies:[]
  })
  const [addnew ,setaddnew] =useState({
   dist : ""
  })
  const [area ,setArea] =useState("")
  const handlechange1 = (e) => {
    let newone = { ...addnew };
  
    newone[e.target.name] = e.target.value;
  
    setaddnew(newone);
  };
  const handlechange2 = (e) => {
    setArea(e.target.value);
  };
  useEffect(()=>{
    for (var a in editableUser)
    {
    if( a != "id"){
     document.getElementById(a).value = editableUser[a]
    }
    }
  },[]) ;
  var newd
 const updatedistrict =()=>{
  console.log(updateduser)
   newd = {...updateduser}
  for (var a in updateduser){
   if( a != "id" && a != "constiuencies"){
    newd[a] =document.getElementById(a).value ;
   } else if ( a == "constiuencies"){
    newd[a] = document.getElementById(a).value.split(',');
  }
  }
  console.log(newd)
  updateFunc(newd , editableUser.id , ()=>navigate("admindashboard"));
  
 }
 return (
   <div><div className="container" style={{ marginTop: "80px" }}>
   <div className="row">
     <div className="col-4"></div>
     <div className="col-4">
      {editableUser != null ?  <form className="loginform">
         <h2>Update District Details</h2>
         <div class="mb-3">
           <label class="form-label">District</label>
           <input
             type="text"
             class="form-control"
             // value={addnew.dist}
             onChange={(e) => {
               handlechange1(e);
             }}
             name="district"
             id="district"
           />
         </div>
         <div class="mb-3">
           <label class="form-label">Contiuency</label>
           <input
             type="text"
             class="form-control"
             id="constiuencies"
             onChange={(e) => {
               handlechange2(e);
             }}
             name="constiuency"
             // value={area}
           />
         </div>

         <button type="button" class="btn btn-primary" onClick={()=>updatedistrict()}>
           Update
         </button>
       </form> : ""}
     </div>
     <div className="col-4"></div>
   </div>
 </div>
 </div>
 )
}



const MSTP =(state)=>{
  return{
    editableUser : state
  }
}
const MDTP =(dispatch)=>{
  return {
       updateFunc : (newd ,id , x)=>dispatch(UpdateAction(newd ,id , x)),
       
  }
}

export default connect(MSTP ,MDTP)(Edit)