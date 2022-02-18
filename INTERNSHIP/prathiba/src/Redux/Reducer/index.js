export const rootReducer = (state,action)=>{
    switch (action.type) {
        case "REGISTERED":
            console.log("DATA REGISTERED SUCCESSFULLy")
            return state
    
        default:
            console.log("DEFAULT TYPE")
            return state
    }
}