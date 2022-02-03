import React from "react";
import axios from "axios";
import { GET_DISTRICTS_DATA } from "./Action_Types";

export  const getDistrictsDataAction = ()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3000/districtslist').then(({data})=>{
            dispatch({
                    type : GET_DISTRICTS_DATA ,
                    payload : data , 
                   
                 })
                 
                })}}
           