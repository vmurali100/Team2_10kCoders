import { GET_ALL_PRODUCTS } from "../actions/actiontypes";

const defaultState={
    products:[],
}
export default function userReducer(state=defaultState,action){
    switch(action.type){
        case GET_ALL_PRODUCTS:
            console.log()
            return action.payload;
            default:
                return state.products
    }
}