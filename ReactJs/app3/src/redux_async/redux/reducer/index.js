import { GET_ALL_COMMENTS } from "../actions/actiontypes";

const defaultState={
    comments:[]
}

export default function userReducer(state=defaultState,action){
    switch(action.type){
        case GET_ALL_COMMENTS:
            console.log()
            return action.payload;
            default:
return state.comments;
    }     

}