const defaultState={
    users:[]
}
 export default function rootReducer(state=defaultState,action){
    switch(action.type){
        case "ADD_USER":

        case "DELETE_USER":

        case "UPDATE_USER":

        default:
            return state
    }
}