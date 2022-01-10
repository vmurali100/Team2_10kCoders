const defaultState={
    users:["abc","bca","cad","dae"]
}
const userReducer=(state=defaultState,action)=>{
    switch(action.type){
        case "GET_ALLUSERS":
            return defaultState.users
            case "DELETE_USER":
                defaultState.users.pop()
                return defaultState.users
            default:
                return defaultState.users
    }
}
export default userReducer