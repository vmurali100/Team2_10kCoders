import React from "react";
import { SIGN_UP_USER_DATA ,EMAIL_VERIFICATION } from "../Actions/ActionTypes";

const initState = {
    tokendata : "" ,
    code : "" ,

}

export const Reducer  = (state =initState ,actions) =>{
    const {type ,payload} = actions
    switch (type) {
        case SIGN_UP_USER_DATA:
        return {...state , code : payload} ;

        // case EMAIL_VERIFICATION :
        // return {...state , tokendata : payload}

        case EMAIL_VERIFICATION :
            return {...state , tokendata : payload}
    
        default:
            break;
    }
}