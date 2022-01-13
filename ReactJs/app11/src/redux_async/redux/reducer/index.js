import { GET_ALL_DATA } from "../actions/actiontypes";

const defaultState={
    filltext2:{}
}
export default function cartReducer(state=defaultState,action){
    switch(action.type){
        case GET_ALL_DATA:
            console.log()
            return action.payload;
            default:
                return state.filltext2
    }
}