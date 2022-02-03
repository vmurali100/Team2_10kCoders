import React from "react";
import axios from "axios";
import { GET_DISTRICTS_DATA } from "./Action_Types";

export  const getDistrictsDataAction = ()=>{
    return new Promise (()=>{
        axios.get('http://localhost:3000/districtslist').then(({data})=>{
            dispatch(
                return {
                    type : GET_DISTRICTS_DATA ,
            
                }
            )
        })
      
    })
    
}