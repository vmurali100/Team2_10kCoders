import { GET_ALL_POSTS } from "../actions/actiontypes";


const defaultState={
    posts:[],
};
export default function userReducer(state=defaultState,action){
    switch(action.type){
case GET_ALL_POSTS:
    console.log()
    return action.payload;

    default:
       return state.posts
    }
}