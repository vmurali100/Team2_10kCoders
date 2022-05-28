import { ADD_DISTRICTS,  GET_ALL_DISTRICTS } from "../actions/actiontypes"

export const rootReducer = (state,action)=>{
    switch (action.type) {
        case GET_ALL_DISTRICTS:
            return action.payLoad
    
        case ADD_DISTRICTS:
            return state
        
        // case DELETE_DISTRICTS:
        //     console.log(state)

        //     return state
     
        // case UPDATE_DISTRICTS:
        //     return state

        default:
            return state
    }
}