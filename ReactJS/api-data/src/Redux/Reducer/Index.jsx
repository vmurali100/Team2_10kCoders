import React from "react";
import { GET_ALL_USERS } from "../Actions/ActionTypes";


 const intialstate = {
     users:[]
 }

const rootReducer = (state=intialstate,action)=>{
    switch (action.type) {
        case GET_ALL_USERS:
            
            return action.payload;
    
        default:
            return state;
    }

}
export default rootReducer;