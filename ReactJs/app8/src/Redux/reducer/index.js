const defaultData = {
    user:[]
}

function rootReducer(state=defaultData,action){
    switch (action.type) {
        case "GET_USER":
            return state
        case "CREATE_USER":
            let newUsers = [...state]
            newUsers.push(action.payload)
            return newUsers
    
        default:
            return state
    }
}
export default rootReducer