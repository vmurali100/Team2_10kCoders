import { GET_ALL_CARTS } from "../actions/actiontypes";

const defaultState={
    carts:[]
}
export default function userReducer(state=defaultState,action){
    switch(action.type){
        case GET_ALL_CARTS:
            console.log()
            return action.payload;
            default:
                return state.carts
            }
}