const defaultData = {
    students:["Teja","Ramesh","Rajesh","Praveen"],
    
}

const rootReducer = (state=defaultData,action)=>{
    switch(action.type){
        case "GET_ALL_STUDENTS":
            return ["Teja","Ramesh","Rajesh","Praveen"]

        case "DEL_STUDENT":
            console.log(state)
            console.log(action.payload)
            return state.filter((std)=>
                std !== action.payload
            )
        default:
            return state
    }
}
export default rootReducer

