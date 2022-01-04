const defaultData = {
    engineers:["Engineer1","Engineer2"],
    doctors:["Doctor1","Doctor2"],
    teachers:["Teacher1","TEacher2"]
}

export default function rootReducer1(state=defaultData,action){
    switch(action.type){
        case "GET_ALL_ENGINEERS":
        return state.engineers ;

        case "GET_ALL_DOCTORS" :
            return state.doctors;
         
        case "GET_ALL_Teachers":
            return state.teachers;
    
        default:
            return state
    }
   
}