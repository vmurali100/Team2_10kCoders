export default function rootReducer1(state,action){
    switch(action.type){
        case "GET_ALL_ENGINEERS":
        return "Hai we Are Engineers" ;

        case "GET_ALL_DOCTORS" :
            return "Hai We are DOCtors";
        
        case "GET_ALL_Teachers":
            return "Hi from Teachers";
    }
}