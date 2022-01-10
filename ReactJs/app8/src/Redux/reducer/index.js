const defaultData = {
    user:["TEJA"]
}

function rootReducer(state=defaultData,action){
    switch (action.type) {
        case "GET_USER":
            return state
        case "CREATE_USER":
            let newUsers = [...defaultData.user]
            newUsers.push(action.payload)
            return newUsers
    
        default:
            return state
    }
}
export default rootReducer