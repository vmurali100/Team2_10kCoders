// import React from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetExamsListAction, { ViewProfileAction } from "../Redux/Actions";

export  const EntryPage =(props)=>{
    const {tokendata , ViewProfileFunc ,GetExamsListFunc} = props
    // const tokendata = useSelector((state)=> state);
    // const dispatch = useDispatch()
    const navigate = useNavigate()
useEffect(()=>{
    console.log(tokendata[0])
    console.log(props)
},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <button type="button" onClick={()=>(ViewProfileFunc( tokendata[0], ()=> navigate("/profile")))}>Profile</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                    <button type="button" onClick={()=>(GetExamsListFunc( tokendata, ()=> navigate("examslist")))}>GET EXMAS LIST</button>
                  
                    </div>
                    <div className="col-4">
                        </div>
                </div>
            </div>
        </div>
    )
}

const  MDTP =(dispatch)=>{
    return {
        ViewProfileFunc : (tokendata ,x)=> dispatch(ViewProfileAction(tokendata,x)),
        GetExamsListFunc : (tokendata ,x) =>dispatch(GetExamsListAction(tokendata ,x))
    }
}
const MSTP =(state)=>{
    return {
        tokendata : state
    }
}
export  default connect(MSTP ,MDTP)(EntryPage)