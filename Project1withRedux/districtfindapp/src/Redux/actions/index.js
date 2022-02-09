import React from "react"
import axios from "axios"
import { GET_ALL_DISTRICTS } from "./actionTypes"
export const getAllDistictsAction= (districts)=>{
    console.log("Action PArt");
    return async(dispatch)=>{
        let allDistricts = await axios.get("http://localhost:3000/districts")
        console.log(allDistricts.data);
        dispatch({type:GET_ALL_DISTRICTS,payload:allDistricts.data})
    }
}
export const deleteDistrictAction = (dist)=>{
    console.log("delete Action");
   return async (dispatch)=>{
    axios.delete("http://localhost:3000/districts/"+dist.id).then((res)=>{
        dispatch(getAllDistictsAction())
    })
   }
}

export const updateDistrictAction = (dist) =>{
    console.log("District Action")
    return async (dispatch) =>{
        axios.put("http://localhost:3000/districts/"+dist.id,dist).then((res)=>{
            dispatch(getAllDistictsAction())
        })
    }
}