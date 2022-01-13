import { GET_ALL_ALBUMS } from "../actions/actiontypes";


const defaultState={
    albums:{},
}
export default function userReducer(state=defaultState,action){
    switch(action.type){
        case GET_ALL_ALBUMS:
        console.log()
        return action.payload;
        default:
            return state.albums
    }
}