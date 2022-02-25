export const rootReducer = (state,action)=>{
    switch (action.type) {
        case "REGISTERED_RESPONSE":
            console.log("DATA REGISTERED SUCCESSFULLy")
            return action.payload

        case "EMAILVERIFICATION":
            console.log("EMAILVERIFICATION DONE SUCESSFULLY IN REDUCERS")
            alert(action.payload)
            return action.payload    

        case "PROFILEDATA":
            console.log("Getting Data from LogInToken-Reducers")
            return action.payload

        case "USERDETAILS":
            console.log("Getting user details-Reducers")
            return action.payload
    
        default:
            console.log("DEFAULT TYPE")
            return state
    }
}