import React from "react";
import { SIGN_UP_USER_DATA } from "../Actions/ActionTypes";

const initState = {
    token : "" ,
    code : "" ,
}

export const Reducer  = (state =initState ,actions) =>{
    const {type ,payload} = actions
    switch (type) {
        case SIGN_UP_USER_DATA:
        return {...state , code : payload}
    
        default:
            break;
    }
}