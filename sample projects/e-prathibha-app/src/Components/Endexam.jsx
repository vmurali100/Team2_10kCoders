import React from "react";
import { connect } from "react-redux";

 const Endexam =(props)=>{
     let{end}=props
     console.log(end)
    return <div>
        <h1>{end != null ? end : ""}</h1>

    </div>
}

const MSTP =(state)=>{
    return {
        end :state.end 
    }
}
export  default connect(MSTP)(Endexam)