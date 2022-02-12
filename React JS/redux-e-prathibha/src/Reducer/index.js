import { EMAILVERIFICATION, HOME, LOGIN, PROFILE_DATA, REGISTER } from "../Actions/actionTypes";
const defaultState={
    tokendata:{}
}

export const reducer=(state=defaultState,action)=>{
    switch (action.type) {

        case LOGIN:
            let userlog={...state};
            userlog=action.payLoad;
            console.log("reducer data",userlog)
            return userlog

        case REGISTER:
            return state

        case HOME:
            return state

        case EMAILVERIFICATION:
            return state

        case PROFILE_DATA:
            return state
    
        default:
           return state
    }
}