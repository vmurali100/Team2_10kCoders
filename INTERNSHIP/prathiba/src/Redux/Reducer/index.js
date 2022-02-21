export const rootReducer = (state,action)=>{
    switch (action.type) {
        case "REGISTERED":
            console.log("DATA REGISTERED SUCCESSFULLy")
            return state

        case "EMAILVERIFICATION":
            console.log("EMAILVERIFICATION DONE SUCESSFULLY IN REDUCERS")
            alert(action.payload)
            return action.payload    
    
        default:
            console.log("DEFAULT TYPE")
            return state
    }
}