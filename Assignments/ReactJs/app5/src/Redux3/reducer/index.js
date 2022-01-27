export default function rootReducer2(state,action){
    switch(action.type){
        case "GET_TEJA_INFO":
            return "This Says About Teja"

        case "GET_ERVIN_INFO" :
            return "This Says About Ervin"

        case "GET_SRIKANTH_INFO":
            return "This says About SriKAnth"
    }
}