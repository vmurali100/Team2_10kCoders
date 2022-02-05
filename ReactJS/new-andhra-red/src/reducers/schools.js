export const schoolReducer = (state,action)=>{
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