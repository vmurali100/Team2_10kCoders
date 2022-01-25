import React from "react";
import { GET_API_DATA } from "../Actions/ActionTypes";

const iniState = []
export const Reducer = (state = iniState , action)=>{
  switch (action.type) {
            case GET_API_DATA:
                return action.payload
        
            default:
                return state
        
    }
}