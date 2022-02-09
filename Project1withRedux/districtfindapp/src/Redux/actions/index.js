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
