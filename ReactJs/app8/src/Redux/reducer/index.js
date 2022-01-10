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
            console.log("From Reducers",newUsers)
            return newUsers
    
        default:
            return state.user
    }
}
export default rootReducer