import React from "react";
import { SIGN_UP_USER_DATA ,EMAIL_VERIFICATION , USER_LOGIN, PROFILE_DATA, GET_EXAMS_LIST, USER_LOG_OUT} from "../Actions/ActionTypes";

const initState = {
    tokendata : [] ,
    code : "" ,
    profiledata : {},
    examslist:[]

}

export const Reducer  = (state =initState ,actions) =>{
    const {type ,payload} = actions
    switch (type) {
        case SIGN_UP_USER_DATA:
        return {...state , code : payload} ;

        // case EMAIL_VERIFICATION :
        // return {...state , tokendata : payload}

        case USER_LOGIN :
            console.log(payload)
            var newarr = [...state]
            newarr.push(payload)
            console.log(newarr)
            return newarr[0]
        case PROFILE_DATA :
            var newodj = {...state , profiledata: payload};

            return newodj 
            
            case GET_EXAMS_LIST :
                var arr = [...state];
          arr.push(payload);
          console.log(arr)
          return arr 
          case USER_LOG_OUT :
              state.profiledata = payload
              return state.profiledata
        default:
            return state.code
    }
}