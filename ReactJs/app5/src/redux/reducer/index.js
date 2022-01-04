export default function rootReducer(state,action){
    switch(action.type){
        case"GET_ALL_STUDENTS":
        return "hello from all students";

        case "GET_ALL_PRODUCTS":
            return "hello from all products";


            default:
                return"hello"
    }
}