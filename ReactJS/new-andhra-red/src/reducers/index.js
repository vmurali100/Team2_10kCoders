import { ADD_DISTRICTS, DELETE_DISTRICTS, GET_ALL_DISTRICTS, UPDATE_DISTRICTS } from "../actions/actionTypes";

export const rootReducer = (state,action)=>{
    switch (action.type) {
        case GET_ALL_DISTRICTS:
            return action.payLoad
    
        case ADD_DISTRICTS:
            return state
        
        case DELETE_DISTRICTS:
            return state
     
        case UPDATE_DISTRICTS:
            return state

        default:
            return state
    }
}