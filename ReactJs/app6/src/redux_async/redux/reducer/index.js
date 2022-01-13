import { GET_ALL_TODOS } from "../actions/actiontypes";

const defaultState={
    todos:{}
}
export default function userReducer(state=defaultState,action){
    switch(action.type){
        case GET_ALL_TODOS:
            console.log()
            return action.payload;
            default:
                return state.todos

    }
}