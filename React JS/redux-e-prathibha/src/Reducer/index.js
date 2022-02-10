import { LOGIN, REGISTER } from "../Actions/actionTypes"

export const reducer=(state,action)=>{
    switch (action.type) {

        case LOGIN:
            return state

        case REGISTER:
            return state
    
        default:
           return state
    }
}