const defaultData = {
    user:[]
}

function rootReducer(state=defaultData,action){
    switch (action.type) {
        case "GET_USER":
            return state
        case "CREATE_USER":
            console.log(state)
            //let newUsers = {...state}
            //newUsers.push(action.payload)
            var newUsers = Object.assign(state,action.payload)
            console.log("From Reducers",newUsers)
            return newUsers
    
        default:
            return state
    }
}
export default rootReducer