import { GETAPI_DATA } from "../Action/ActionType";

const  data = {
    todos :{}
}

export function rootReducer (state=data , action) {
    // const {type , payload} = action
    switch (action.type) {
        case GETAPI_DATA:
           return state.todos
    
        default:
          return state.todos
    }
}