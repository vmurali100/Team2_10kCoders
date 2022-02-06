import React, { useState } from "react";
import { useEffect } from "react";
import { connect, useDispatch ,useSelector} from "react-redux";
// import {  } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import  GetExamsListAction ,{ ViewProfileAction } from "../Redux/Actions";
// import { Profile } from "./Profile";

 const EntryPage = (props)=>{
const navigate = useNavigate()
    var tokend =useSelector((state) => state);
//   useEffect(()=>{
//     console.log(props)
//     console.log(tokend)
//   },[])
   
    const { ViewProfileFunc , getExamsListFunc} = props
    const getExamsList =(x)=>{
      console.log(props)
     getExamsListFunc(x)
    }
    return (
        <div>
            <div className="container">
            <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                    </div>
                    <div className="col-3"> <Link to = "/profile"><h4 onClick={()=>ViewProfileFunc()}>Profile</h4></Link></div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                    <h2>List Of Exams </h2>
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    {/* {images.map((e)=>{
                        return <img src={e.url} alt="book" style={{width : "200px" , margin: "20px 30px"}} />
                    })} */}
                    <button type="button" className="btn btn-dark" onClick={()=>getExamsList(()=> navigate("exmaslist"))}>GET EXAMS LIST</button>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}
const MDTP =(dispatch)=>{
 return {
    ViewProfileFunc:()=>dispatch(ViewProfileAction()),
    getExamsListFunc:(x)=>dispatch(GetExamsListAction(x))
 }
}
// const MSTP =(state)=>{
// return {
//     tokend : state
// }
// }
export default connect(MDTP)(EntryPage)