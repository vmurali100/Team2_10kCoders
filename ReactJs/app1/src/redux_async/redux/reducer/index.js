import { GET_ALL_USERS } from "../actions/actionTypes";

const defaultState={
    users:{},
};
export default function userReducer(state=defaultState,action){
    switch(action.type){
case GET_ALL_USERS:
    console.log()
    return action.payload;

    default:
       return state.users
    }
}