import { EMAILVERIFICATION, HOME, LOGIN, REGISTER } from "../Actions/actionTypes"

export const reducer=(state,action)=>{
    switch (action.type) {

        case LOGIN:
            return state

        case REGISTER:
            return state

        case HOME:
            return state

        case EMAILVERIFICATION:
            return state
    
        default:
           return state
    }
}