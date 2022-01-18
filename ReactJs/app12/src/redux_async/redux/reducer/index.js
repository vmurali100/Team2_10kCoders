import { GET_ALL_DATA } from "../actions/actiontypes";

const defaultState={
    filltext3:[],
}
export default function cartReducer(state=defaultState,action){
    switch(action.type){
        case GET_ALL_DATA:
            console.log()
            return action.payload;
            default:
                return state.filltext3
    }
}